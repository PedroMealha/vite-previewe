<template>
	<div class="view-bar" v-if="activeFormat">
		<div class="focus" v-if="activeSet.type == 'IAB'">
			<div class="loading">
				<div class="ico" :class="{ on: !iframeLoaded }" :style="{ opacity: iframeLoaded ? 0 : 1 }">autorenew</div>
			</div>
			<iframe :src="activeFormat.url" frameborder="0" style="top:50px; left:50px;" :style="{ width: size.w + 'px', height: size.h + 'px', opacity: iframeLoaded ? 1 : 0 }" @load="loadIframe"></iframe>
			<div class="border"></div>
			<div class="format label">
				{{ activeFormat.size }}
				<div class="actions">
					<Actions />
				</div>
			</div>
		</div>
		<div class="focus" v-else>
			<iframe :src="activeSet.preview" frameborder="0" style="width: 100%; height:100%;"></iframe>
		</div>
	</div>
</template>

<script>
import Actions from './Actions.vue'
import { mapState } from 'vuex'

export default {
	name: "ViewBar",
	components: {
		Actions
	},
	methods: {
		loadIframe() {
			this.$store.commit('IFRAME_LOADED', true);
		}
	},
	computed: {
		...mapState(['activeFormat', 'activeSet', 'iframeLoaded']),
		size() {
			let split = this.activeFormat.size.split("x");
			return {
				w: split[0],
				h: split[1],
			};
		}
	}
}
</script>

<style lang="less" scoped>
@color-magenta: #c34efd;
@color-grey-dark: #111;
@color-white: #fff;
@color-green: #42b983;
@color-teal: #16c0b0;
@color-blue: #2c3e50;
@color-blue-light: #e4f2f4;
@border-size: 1px;
.view-bar {
	margin-top: 100px;
	width: 100%;
	display: flex;
	justify-content: center;

	.focus {
		position: relative;

		iframe {
			display: block;
		}

		.loading {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			.ico {
				font-size: 2em;

				&.on {
					animation: loading 2s infinite linear;

					@keyframes loading {
						from {
							transform: rotate(0deg);
						}
						to {
							transform: rotate(360deg);
						}
					}
				}
			}
		}
	}

	.border {
		border: @border-size solid @color-blue;
	}
}

.label {
	position: absolute;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	top: @border-size;
	padding: 0.5em;
	border: @border-size solid @color-blue;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	background: lighten(@color-blue, 10%);
	color: @color-blue-light;
	transform: translateY(-100%);
}

.actions {
	margin-top: 0.2em;
}
</style>

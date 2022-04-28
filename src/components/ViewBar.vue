<script setup>
import Actions from './Actions.vue'
</script>

<template>
	<div class="focus" v-if="activeFormat && activeSet.type == 'IAB'" :style="{ width: size.w + 'px', height: size.h + 'px' }">
		<div class="loading">
			<div class="ico" :class="{ on: !iframeLoaded }" :style="{ opacity: iframeLoaded ? 0 : 1 }">autorenew</div>
		</div>
		<iframe :src="activeFormat.url" frameborder="0" :style="{ opacity: iframeLoaded ? 1 : 0 }" @load="loadIframe($event)"></iframe>
		<div class="border"></div>
		<div class="format label">
			{{ activeFormat.size }}
			<div class="actions">
				<Actions />
			</div>
		</div>
	</div>
	<iframe v-else-if="activeSet" :src="activeSet.preview" frameborder="0"></iframe>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: "ViewBar",
	methods: {
		loadIframe(e) {
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

.focus {
	display: flex;
	margin-top: 100px;
	position: relative;

	.actions {
		// margin-left: 0.5em;

		&:deep(.ico) {

			&:hover {
				background: darken(@color-blue, 10%);
			}
		}
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

iframe {
	display: block;
	width: 100%;
	height: 100%;
}

.border {
	border: @border-size solid @color-blue;
}

.label {
	position: absolute;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	top: @border-size;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	background: lighten(@color-blue, 10%);
	color: @color-blue-light;
	transform: translateY(-100%);
	overflow: hidden;
	padding: 0.5em .5em .5em 1em;
}

.richmedia {
	&.view-bar {
		margin-top: 0;
		height: 100%;
	}
}
</style>

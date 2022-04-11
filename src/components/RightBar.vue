<template>
	<div class="mention-bar" :class="{ close: isClosed }">
		<div class="formats" v-for="phase in activeProject.phase" :key="phase">
			<div class="phase">{{ phaseName(phase) }}</div>
			<div class="sets" v-for="set in phase.sets" :key="set">
				<div class="container" v-if="set.type === 'IAB'">
					<div class="set">
						{{ setName(set) }}
						<div class="actions">
							<Actions />
						</div>
					</div>
					<ul class="format">
						<li v-for="format in set.formats" :key="format" @click="handleClick($event, format, set)">{{ format.size }}</li>
					</ul>
				</div>
				<div class="container" v-else>
					<div class="set">{{ setName(set) }}</div>
					<ul class="format">
						<li @click="openExternal($event, set.upload, set)">
							Upload
							<span class="ico">link</span>
						</li>
						<li @click="openExternal($event, set.preview, set)">
							Preview
							<span class="ico">link</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<Button id="close" text="&times;" @click="showBar" />
	</div>
</template>

<script>
import Button from './Button.vue'
import Actions from './Actions.vue'
import { mapState } from 'vuex'

export default {
	name: 'RightBar',
	components: {
		Button,
		Actions
	},
	data() {
		return {
			isClosed: false,
			lastSelected: null
		}
	},
	methods: {
		showBar() {
			this.isClosed = !this.isClosed;
		},
		handleClick(e, format, set) {
			if (this.lastSelected)
				this.lastSelected.classList.remove('selected');
			e.target.classList.add('selected');
			this.lastSelected = e.target;

			this.setActiveSet(set);
			this.setActiveFormat(format);

			this.$store.commit('IFRAME_LOADED', false);
		},
		openExternal(e, url, set) {
			if (this.lastSelected)
				this.lastSelected.classList.remove('selected');
			e.target.classList.add('selected');
			this.lastSelected = e.target;

			this.setActiveSet(set);
      window.open(url);
		},
		setActiveFormat(format) {
			this.$store.commit('UPDATE_ACTIVE_FORMAT', format);
		},
		setActiveSet(set) {
			this.$store.commit('UPDATE_ACTIVE_SET', set);
		},
		phaseName(phase) {
			return phase.name != '' ? phase.name : `- Unnamed Phase -`;
		},
		setName(set) {
			return set.name != '' ? `${set.platform} ${set.name}` : `${set.platform} - Unnamed Set -`;
		}
	},
	computed: {
		...mapState(['activeProject'])
	}
}
</script>

<style scoped lang="less">
@color-magenta: #c34efd;
@color-grey-dark: #111;
@color-white: #fff;
@color-green: #42b983;
@color-teal: #16c0b0;
@color-blue: #2c3e50;
@color-blue-light: #e4f2f4;

@button-size: 30px;
@maxWidth: 250px;

.mention-bar {
	max-width: @maxWidth;

	&.close {
		margin-right: -@maxWidth + @button-size + 1;

		.formats {
			opacity: 0;
		}
	}
}

#close {
	position: absolute;
	top: 0;
	left: 1px;
	width: @button-size;
	height: @button-size;
	font-size: 1.5em;
}

.formats {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	color: lighten(@color-blue, 40%);

	.phase {
		width: 100%;
		background: lighten(@color-blue, 30%);
		color: @color-blue-light;
		padding: 0.5em 0;
		font-weight: 700;
		font-size: 1.1em;
	}

	.sets {
		width: 100%;
		padding: 0.5em 0;
		color: @color-blue-light;

		.container {
			margin-bottom: 0.5em;

			.set {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				padding: 0.5em;
				background: lighten(@color-blue, 10%);
			}
		}
	}
}

.format {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: lighten(@color-blue, 40%);
}

li {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 0.5em 0;
	font-weight: 300;
	cursor: pointer;

	&.selected {
		background: fade(@color-blue, 50%);
	}

	&:hover {
		background: fade(@color-blue, 50%);
	}
}

body.light {
	.formats {
		color: lighten(@color-blue, 10%);

		.phase {
			color: @color-blue-light;
			background: darken(@color-blue, 5%);
		}
	}

	.format {
		color: lighten(@color-blue, 10%);
	}

	li {
		&:hover {
			background: darken(@color-blue-light, 10%);
		}

		&.selected {
			background: darken(@color-blue-light, 10%);
		}
	}

	.ico {
		color: @color-blue-light;
	}
}
</style>

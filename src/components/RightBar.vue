<template>
	<div class="mention-bar" :class="{ close: isClosed }">
		<div class="results">
			<ul v-for="project in activeProject" :key="project">
				<tree :tree-data="project"></tree>
			</ul>
		</div>
		<Button id="close" text="&times;" @click="showBar" />
	</div>
</template>

<script>
import Button from './Button.vue'
import Actions from './Actions.vue'
import Tree from "./Tree.vue";
import { mapState } from 'vuex'

export default {
	name: 'RightBar',
	components: {
		Button,
		Actions,
		Tree
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
			// if (this.lastSelected && this.lastSelected === e.target)
			// 	return;

			if (this.lastSelected)
				this.lastSelected.classList.remove('selected');
			e.target.classList.add('selected');
			this.lastSelected = e.target;

			this.setActiveSet(set);
			this.setActiveFormat(format);

			this.$store.commit('IFRAME_LOADED', false);
		},
		copyExternalUrl(url) {
			navigator.clipboard.writeText(url);
		},
		openExternalUrl(url) {
			window.open(url);
		},
		setActiveFormat(format) {
			this.$store.commit('UPDATE_ACTIVE_FORMAT', format);
		},
		setActiveSet(set) {
			this.$store.commit('UPDATE_ACTIVE_SET', set);
		},
		phaseName(phase) {
			return phase.name != '' ? phase.name : `(Unnamed Phase)`;
		},
		setName(set) {
			return set.name != '' ? `${set.platform} ${set.name}` : `${set.platform} (Unnamed Set)`;
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

	.results {
		width: 100%;
		padding: 0 0.5em;
	}

	&.close {
		margin-right: -@maxWidth + @button-size + 1;
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

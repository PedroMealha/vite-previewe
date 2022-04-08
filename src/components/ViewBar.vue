<template>
	<div class="view-bar" v-if="getActiveFormat">
		<div class="focus" v-if="getActiveSet.type == 'IAB'">
			<iframe :src="getActiveFormat.url" frameborder="0" :style="{ width: size.w + 'px', height: size.h + 'px' }"></iframe>
			<div class="border"></div>
			<div class="format label">{{ getActiveFormat.size }}</div>
			<div class="actions label">
				<div class="ico">cached</div>
				<div class="ico">download</div>
				<div class="ico">link</div>
				<div class="ico">open_in_new</div>
			</div>
		</div>
		<iframe v-else :src="getActiveSet.preview" frameborder="0" style="width: 100%; height:100%;"></iframe>
	</div>
</template>

<script>

export default {
	name: "ViewBar",
	computed: {
		getActiveProject() {
			return this.$store.state.activeProject;
		},
		getActiveFormat() {
			return this.$store.state.activeFormat;
		},
		getActiveSet() {
			return this.$store.state.activeSet;
		},
		size() {
			let split = this.getActiveFormat.size.split("x");
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
		background: lighten(@color-blue, 30%);
		position: relative;

		iframe {
			display: block;
		}
	}

	.border {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: @border-size solid @color-blue;
	}
}

.label {
	position: absolute;
	top: @border-size;
	border: @border-size solid @color-blue;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	transform: translateY(-100%);
	background: lighten(@color-blue, 10%);
	font-weight: 700;
	color: @color-blue-light;

	&.format {
		padding: 0.5em 1em;
		left: 0;
	}
}

.actions {
	right: 0;
	.ico {
		display: inline-block;
		padding: 0.5em 0.5em;
		cursor: pointer;

		&:first-child {
			padding-right: 0.5em;
		}

		&:last-child {
			padding-left: 0.5em;
		}

		&:hover {
			color: lighten(@color-blue, 40%);
		}
	}
}
</style>

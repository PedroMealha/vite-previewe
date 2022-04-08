<template>
	<div class="client">
		<div v-if="getActiveFormat">
			<div class="name">{{ getActiveProject.client }}</div>
			<div class="info">
				<div class="project-bar">
					<div>
						<span>brand:</span>
						{{ getActiveProject.brand }}
					</div>
					<div>
						<span>campaign:</span>
						{{ getActiveProject.campaign }}
					</div>
					<div>
						<span>date:</span>
						{{ getActiveProject.date }}
					</div>
				</div>
			</div>
		</div>
		<div class="welcome" v-else>
			<img class="logo" src="../assets/logo.svg" />
			<div class="title">
				WELCOME TO
				<span>MAINBRAIN</span>PREVIEW STAGE
			</div>
		</div>
	</div>
	<div id="switch" @click="toggleSwitch">
		<div class="border"></div>
		<div class="btn">
			<div class="light"></div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'TopBar',
	methods: {
		toggleSwitch() {
			document.querySelector('body').classList.toggle('light');
		}
	},
	computed: {
		getActiveProject() {
			return this.$store.state.activeProject;
		},
		getActiveFormat() {
			return this.$store.state.activeFormat;
		}
	},
	created() {
		let lightheme = window.matchMedia("(prefers-color-scheme: light)").matches;
		if (lightheme) document.querySelector("body").classList.add('light');
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

.client {
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	background: @color-grey-dark;
	flex-grow: 0;
	border-bottom: 1px solid @color-blue;
	transition: all @transitionSpeed cubic-bezier(0.21, 0.74, 0.5, 1);

	.name {
		padding-top: 20px;
		font-size: 1.5em;
		color: @color-blue-light;
		font-weight: 700;
	}
	.info {
		width: 100%;
		font-size: 0.9em;
		color: lighten(@color-blue, 40%);
		.project-bar {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			div {
				padding: 1em;
				font-weight: 700;
				font-size: 1.2em;

				span {
					font-weight: 300;
					font-style: italic;
				}
			}
		}
	}
}

.welcome {
	color: @color-blue-light;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	height: 100%;
	color: @color-white;
	transition: color @transitionSpeed cubic-bezier(0.21, 0.74, 0.5, 1);

	.logo {
		width: 60px;
	}

	.title {
		font-weight: 300;
		display: flex;
		align-items: center;
		justify-content: center;

		span {
			font-weight: 700;
			color: @color-magenta;
			padding: 0 0.2em;
		}
	}
}

@switchWidth: 60px;
@borderSize: @switchWidth * 0.025;
@lightSize: @switchWidth * 0.5 - @borderSize * 4;
@transitionSpeed: 1s;

#switch {
	position: absolute;
	top: 1em;
	width: @switchWidth;
	height: @switchWidth * 0.5;
	position: relative;
	border-radius: @switchWidth;
	overflow: hidden;
	background: @color-white;
	transition: background @transitionSpeed cubic-bezier(0.21, 0.74, 0.5, 1);
	cursor: pointer;

	.border {
		position: absolute;
		top: @borderSize;
		left: @borderSize;
		right: @borderSize;
		bottom: @borderSize;
		border-radius: @switchWidth;
		background: @color-grey-dark;
		transition: background @transitionSpeed cubic-bezier(0.21, 0.74, 0.5, 1);
	}

	.btn {
		position: absolute;
		width: 100%;
		height: 100%;

		.light {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: @borderSize * 2;
			width: @lightSize;
			height: @lightSize;
			border-radius: 50%;
			background: @color-white;
			transition: all @transitionSpeed cubic-bezier(0.21, 0.74, 0.5, 1);
		}
	}
}

body.light {
	.client {
		background: @color-blue-light;
	}

	.welcome {
		color: @color-blue;
	}

	#switch {
		background: @color-grey-dark;

		.border {
			background: @color-white;
		}
		.btn {
			.light {
				background: @color-grey-dark;
				transform: translate(@switchWidth - @lightSize - @borderSize * 4, -50%);
			}
		}
	}
}
</style>
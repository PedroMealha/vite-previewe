<template>
	<div class="header">
		<div class="client" v-if="getActiveFormat">
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
			<svg class="logo" width="37.945" height="19.864" viewBox="0 0 37.945 19.864">
				<path d="M46.8,66.864H39.228a6.68,6.68,0,0,1-4.86-2.058,6.674,6.674,0,0,1-4.854,2.058h-7.6A6.4,6.4,0,0,1,15.4,60.578V53.313A6.445,6.445,0,0,1,21.963,47h.481a5.126,5.126,0,0,1,3.3,1.192A5.123,5.123,0,0,1,29.034,47h.52a6.641,6.641,0,0,1,4.814,2.037A6.636,6.636,0,0,1,39.189,47h7.583a6.441,6.441,0,0,1,6.568,6.307v.462A4.644,4.644,0,0,1,52.1,56.932,4.7,4.7,0,0,1,53.34,60.1v.5a6.407,6.407,0,0,1-6.532,6.269ZM36.086,58.88v1.7a3.084,3.084,0,0,0,3.143,2.994l7.586.017a3.044,3.044,0,0,0,3.1-2.976v-.778a1.55,1.55,0,0,0-1.581-1.517H36.673A.576.576,0,0,0,36.086,58.88ZM27.16,51.81v11.2a.572.572,0,0,0,.586.556h1.768a3.082,3.082,0,0,0,3.139-3.014V53.276a3.044,3.044,0,0,0-3.1-2.981h-.831A1.549,1.549,0,0,0,27.16,51.81Zm-8.332,1.5v7.265a2.918,2.918,0,0,0,.9,2.112,3.166,3.166,0,0,0,2.2.878h1.827a.572.572,0,0,0,.583-.56V51.813A1.553,1.553,0,0,0,22.759,50.3h-.8A3.082,3.082,0,0,0,18.828,53.313Zm17.258-.044v1.758a.573.573,0,0,0,.587.557H48.328a1.553,1.553,0,0,0,1.58-1.514v-.764A3.079,3.079,0,0,0,46.769,50.3H39.186A3.041,3.041,0,0,0,36.086,53.269Z" transform="translate(-15.395 -47)" />
			</svg>

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

@headerSize: 100px;

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	flex-grow: 0;
	height: @headerSize;
	border-bottom: 1px solid @color-blue;
}
.welcome {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	height: 100%;

	.logo {
		width: 60px;
		path {
			fill: @color-white;
		}
	}

	.title {
		font-weight: 300;
		display: flex;
		align-items: center;
		justify-content: center;
		color: @color-white;

		span {
			font-weight: 700;
			color: @color-magenta;
			padding: 0 0.2em;
		}
	}
}

.client {
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

@switchWidth: 40px;
@borderSize: @switchWidth * 0.05;
@lightSize: @switchWidth * 0.5 - @borderSize * 4;
@transitionSpeed: 1s;

#switch {
	position: absolute;
	top: 4px;
	right: 10px;
	width: @switchWidth;
	height: @switchWidth * 0.5;
	border-radius: @switchWidth;
	overflow: hidden;
	background: lighten(@color-blue, 40%);
	cursor: pointer;

	.border {
		position: absolute;
		top: @borderSize;
		left: @borderSize;
		right: @borderSize;
		bottom: @borderSize;
		border-radius: @switchWidth;
		background: @color-grey-dark;
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
			background: lighten(@color-blue, 40%);
		}
	}
}

body.light {
	.welcome {
		.title {
			color: @color-grey-dark;
		}
	}

	.client {
		.name {
			color: @color-grey-dark;
		}

		.info {
		color: lighten(@color-blue, 10%);
		}
	}

	.logo {
		path {
			fill: @color-grey-dark;
		}
	}

	#switch {
		background: lighten(@color-blue, 10%);

		.border {
			background: @color-blue-light;
		}
		.btn {
			.light {
				background: lighten(@color-blue, 10%);
				transform: translate(@switchWidth - @lightSize - @borderSize * 4, -50%);
			}
		}
	}
}
</style>
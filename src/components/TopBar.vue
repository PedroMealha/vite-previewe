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
		<div class="version">{{ version }}</div>
	</div>
</template>

<script>

export default {
	name: 'TopBar',
	computed: {
		getActiveProject() {
			return this.$store.state.activeProject;
		},
		getActiveFormat() {
			return this.$store.state.activeFormat;
		}
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
</style>
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
	<div class="master-container">
		<left-bar class="side-container left" />
		<div class="center-content">
			<top-bar />
			<view-bar />
		</div>
		<right-bar class="side-container right" />
	</div>
</template>

<script>
import LeftBar from './components/LeftBar.vue'
import RightBar from './components/RightBar.vue'
import TopBar from './components/TopBar.vue'
import ViewBar from './components/ViewBar.vue'
import { mapActions } from "vuex";

export default {
	components: {
		LeftBar,
		RightBar,
		TopBar,
		ViewBar
	},
	methods: {
		...mapActions(["fetchFromDB"]),
	},
	created() {
		this.fetchFromDB('projects');
	}
}
</script>

<style lang="less">
@color-magenta: #c34efd;
@color-grey-dark: #111;
@color-white: #fff;
@color-green: #42b983;
@color-teal: #16c0b0;
@color-blue: #2c3e50;
@color-blue-light: #e4f2f4;

@headerSize: 100px;

html,
body,
#app {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	user-select: none;
}

#app {
	font-family: "Roboto", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	font-size: 14px;
	color: lighten(@color-blue, 40%);
	background: @color-grey-dark;
	overflow: hidden;
}

.master-container {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
}

.center-content {
	position: relative;
	width: 100%;
}

.side-container {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	overflow: hidden;

	&.left {
		border-right: 1px solid @color-blue;
	}

	&.right {
		border-left: 1px solid @color-blue;
		padding-top: @headerSize;
	}
}

input {
	display: block;
	border: none;
	outline: none;
	color: lighten(@color-blue, 40%);
	background: transparent;

	&::placeholder {
		color: lighten(@color-blue, 40%);
	}
}

input[type="text"] {
	padding: 0px 10px;
}

ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

.ico {
	display: inline-block;
	padding: 0 0.25em;
	font-family: "Material Icons";
	cursor: pointer;
}

.border {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	pointer-events: none;
}

body.light {
	#app {
		background: @color-blue-light;
		color: @color-blue;
	}

	input {
		color: @color-grey-dark;

		&::placeholder {
			color: @color-grey-dark;
		}
	}
}
</style>

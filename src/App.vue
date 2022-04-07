<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
	<div class="master-container">
		<left-bar class="left" />
		<div class="center-content">
			<top-bar />
			<view-bar />
		</div>
		<right-bar class="right" />
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
@color-blue-light: #e4f2f4;

#app {
	font-family: "Roboto", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	font-size: 14px;
}

html,
body,
#app {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	user-select: none;
	background-image: linear-gradient(to top, lighten(@color-grey-dark, 2%), @color-grey-dark);
}

.master-container {
	width: 100%;
	height: 100%;
	display: flex;
}

.center-content {
	width: 100%;
}

input {
	display: block;
	border: none;
	outline: none;
}

input[type="text"] {
	padding: 0px 10px;
}

input:focus {
	border-color: #16c0b0;
	outline: 0;
}

ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

.ico {
	font-family: "Material Icons";
}
</style>

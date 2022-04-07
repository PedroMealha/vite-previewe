<template>
	<button>{{ text }}</button>
</template>

<style lang="less" scoped>
@color-magenta: #c34efd;
@color-grey-dark: #111;
@color-white: #fff;
@color-green: #42b983;
@color-teal: #16c0b0;
@color-blue: #2c3e50;
@color-blue-light: #e4f2f4;

button {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1em;
	border: none;
	color: @color-blue-light;
	background: transparent;
	transition: all 0.3s ease-out;
	cursor: pointer;
}

button:hover {
	color: #42b983;
}
</style>


<script>
export default {
	props: {
		text: {
			type: String,
			required: true
		}
	}
}
</script>
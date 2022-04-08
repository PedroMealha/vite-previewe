<template>
	<button>{{ text }}</button>
</template>


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
	color: lighten(@color-blue, 40%);
	background: transparent;
	cursor: pointer;
}

button:hover {
	color: lighten(@color-blue, 60%)
}

body.light {
	button {
		color: @color-grey-dark;
	}

	button:hover {
	color: lighten(@color-grey-dark, 40%)
	}
}
</style>
<template>
	<div class="icos">
		<!-- <div class="ico">refresh</div> -->
		<div class="ico">download</div>
		<div class="ico">link</div>
		<div class="ico">open_in_new</div>
	</div>
</template>

<script>

export default {
	name: 'Actions'
}
</script>

<style lang="less" scoped>
@color-blue: #2c3e50;

.icos {
	display: flex;
	justify-content: center;

	.ico {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		height: 2em;
		padding: 0 .5em;
		cursor: pointer;

		&:hover {
			color: lighten(@color-blue, 40%);
		}
	}
}
</style>
<template>
	<li class="node-tree">
		<span> {{ setName(node) }}</span>
		<ul v-if="node.children && node.children.length > 1">
			<node v-for="child in node.children" :node="child" :key="child"></node>
		</ul>
	</li>
</template>

<script>
export default {
	name: "node",
	props: {
		node: Object
	},
	data() {
		return {
			idx: 0
		}
	},
	methods: {
		setName(n) {
			let nm = n.name.match(/(\d+)x(\d+)/);
			if (n.children.length <= 1 && n.name.match(/(\d+)x(\d+)/))
				return nm[0];

			return n.name
		}
	}
};
</script>

<style lang="less" scoped>
@color-blue: #2c3e50;

ul {
	padding-bottom: .5em;

	li {
		cursor: pointer;
	}
}

span {
	&:hover {
		background: darken(@color-blue, 5%);
	}

	&.selected {
		background: darken(@color-blue, 10%);
	}
}
</style>
<template>
	<div class="name">
		{{ setName(node) }}
	</div>
	<li v-if="node.children && node.children.length > 1">
		<node v-for="child in node.children" :node="child" :key="child"></node>
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
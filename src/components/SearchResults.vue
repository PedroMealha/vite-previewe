<template>
	<!-- <div class="results" v-if="projects && keyword != ''"> -->
	<div class="results" v-if="projects">
		<p v-if="filtered.length == 0">
			No results for
			<span class="keyword">{{ keyword }}</span>
		</p>
		<ul class="card" v-for="client in projects" :key="client">
			<div class="client-name">
				{{ client.name }}
			</div>
			<li v-for="project in client.children" :key="project" :class="{ selected: project.selected }" @click="updateActiveProject(project)">
				{{ project.name }}
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {
			isSelected: false,
			lastProject: {}
		}
	},
	props: {
		keyword: {
			type: String,
			required: true
		}
	},
	methods: {
		updateActiveProject(project) {
			if (project == this.lastProject) return;

			this.lastProject.selected = false;
			project.selected = true;
			this.lastProject = project;

			this.$store.commit('UPDATE_ACTIVE_PROJECT', project.children);
		}
	},
	computed: {
		...mapState(['projects']),
		filtered() {
			return this.projects.filter(p => {
				for (const val of Object.values(p)) {
					if (typeof val == 'string')
						if (val.toLowerCase().includes(this.keyword.toLowerCase())) {
							return p;
						}
				}
			});
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

.results {
	width: 100%;
}

.keyword {
	color: lighten(@color-blue, 60%);
	font-weight: 700;
}

.card {
	list-style: none;
	padding: 0.5em 1em;

	.client-name {
		background: lighten(@color-blue, 10%);
		color: @color-blue-light;
		padding: .5em;
	}

	li {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		// margin: 0.5em 0;
		text-transform: capitalize;
		cursor: pointer;
		padding: .5em;

		&:hover {
			background: @color-blue;
		}

		&.selected {
			background: @color-blue;
		}

		.client {
			display: flex;
			justify-content: center;
			width: 100%;
			padding: 0.5em 0;
			background: lighten(@color-blue, 10%);
			color: @color-blue-light;
		}

		p {
			margin: 0;
			padding: 0.25em 0;
		}

		.info {
			overflow: hidden;
			color: lighten(@color-blue, 40%);

			>div {
				padding: 0.5em 0;
			}
		}
	}
}

body.light {
	.keyword {
		color: @color-blue;
	}

	.card li {
		&:hover {
			background: fade(@color-blue, 50%);
		}

		&.selected {
			background: darken(@color-blue-light, 10%);
		}

		.info {
			color: lighten(@color-blue, 10%);
		}
	}
}

.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: margin-top 0.3s cubic-bezier(0.32, 0.43, 0.5, 0.7);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	margin-top: -100%;
}
</style>
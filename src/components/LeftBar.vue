<template>
	<div class="search-bar" :class="{ close: isClosed }">
		<div id="search">
			<div class="search-container">
				<span class="ico">search</span>
				<input type="search" placeholder="Search client / project..." v-model="keyword" />
			</div>
		</div>
		<search-results :keyword="keyword" />

		<Button id="close" text="&times;" @click="showBar" />
	</div>
</template>

<script>
import SearchResults from './SearchResults.vue'
import Button from './Button.vue'

export default {
	name: 'LeftBar',
	components: {
		Button,
		SearchResults,
	},
	data() {
		return {
			keyword: '',
			isClosed: false
		}
	},
	methods: {
		showBar() {
			this.isClosed = !this.isClosed;
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

@button-size: 28px;
@maxWidth: 250px;

.search-bar {
	max-width: @maxWidth;
	&.close {
		margin-left: -@maxWidth + @button-size + 1;

		#search, .results {
			opacity: 0;
		}
	}
}
.ico {
	color: lighten(@color-blue, 40%);
}

#close {
	position: absolute;
	top: 0;
	right: 1px;
	width: @button-size;
	height: @button-size;
	font-size: 1.5em;
}

#search {
	display: flex;
	width: 100%;
	height: 100px;
	border-bottom: 1px solid @color-blue;
}

.search-container {
	display: flex;
	align-items: center;
	text-align: left;
	align-self: flex-end;
	width: 100%;
	padding: 0 0.25em;

	input {
		width: 100%;
		height: 30px;
		font-style: italic;

		&::-webkit-search-cancel-button {
			appearance: none;
			-webkit-appearance: none;
		}
	}
}

body.light {
	.ico {
		color: @color-grey-dark;
	}
}
</style>

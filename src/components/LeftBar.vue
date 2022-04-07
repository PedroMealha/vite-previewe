<template>
	<div class="search-bar" :class="{ close: isClosed }">
		<Button id="close" text="&times;" @click="showBar" />
		<div id="search" @click="showBar($event, true)">
			<div class="search-container">
				<span class="ico">search</span>
				<input type="search" placeholder="Search client / project..." v-model="keyword" />
			</div>
		</div>
		<search-results :keyword="keyword" />

		<div class="border"></div>
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
		showBar(e, closed) {
			closed ?
				this.isClosed = false :
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

.search-bar {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 250px;
	width: 100%;
	background: @color-grey-dark;
	transition: max-width 0.5s cubic-bezier(0.21, 0.74, 0.5, 1);
	overflow: hidden;

	&.close {
		max-width: @button-size + 1;
	}

	.border {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 1px;
		border-right: 1px solid @color-blue;
		pointer-events: none;
	}
	.ico {
		display: inline-block;
		padding: 0 0.5em;
		color: @color-white;
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

		.search-container {
			display: flex;
			align-items: center;
			text-align: left;
			align-self: flex-end;
			width: 100%;

			input {
				width: 100%;
				height: 30px;
				background: transparent;
				color: @color-blue-light;
				font-style: italic;

				&::-webkit-search-cancel-button {
					cursor: pointer;
					margin: 0 0.6em;
				}

				&::placeholder {
					color: #aabfc2;
				}
			}
		}
	}
}
</style>

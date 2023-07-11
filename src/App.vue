<template>
	<app-header></app-header>
	<div>Hello {{ name }}</div>
</template>

<script>
	export default {
		data() {
			return {
				name: 'Arya'
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-size: 10px;
	}

	div {
		color:orangered;
	}
</style>
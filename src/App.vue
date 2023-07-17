<template>
	<app-header></app-header>
	<div class="container">Hello {{ name }}</div>
	<app-footer></app-footer>
</template>

<script>
	import Footer from './components/header-footer/Footer.vue';
	export default {
		components: {
			'app-footer': Footer
		},
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
		font-family: 'Roboto', sans-serif;
	}

	.container {
		font-size: 2rem;
		min-height: 84vh;
		padding: 20px;
		background-image: linear-gradient(to right bottom, #eb2f64, #BA265D);
		color: #333;
	}
	div {
		color:orangered;
	}
</style>
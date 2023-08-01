<template>
	<app-header></app-header>
	<div class="container">
		<comp-cars :cars="cars"></comp-cars>

	</div>
	<app-footer></app-footer>
</template>

<script>
	import Footer from './components/header-footer/Footer.vue';
	import compCars from './components/Cars';

	export default {
		components: {
			'app-footer': Footer,
			compCars,
		},
		data() {
			return {
				cars: [
					{ model: 'F9', brand: 'ferrari'},
					{ model: '911', brand: 'porsche'},
					{ model: 'prius', brand: 'toyota'},
				]
			}
		},
		methods: {
			
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
		font-size: 3rem;
		/* min-height: 84vh; */
		padding: 20px;
		background-image: linear-gradient(to right bottom, #eb2f64, #BA265D);
		color: #333;
		height: 80vh;
	}
	div {
		color:black;
	}
</style>
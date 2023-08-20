<template>
	<app-header></app-header>
	<div class="container">
		<comp-cars :cars="cars"></comp-cars>
		<comp-brands>
			<template v-slot:brands>
				<ul>
					<li v-for="(brand, index) in brands" :key="brand + index">{{ brand }}</li>
				</ul>
			</template>
			<template v-slot:other>
				<div>some other content</div>
			</template>
			<strong>DEFAULT Slot</strong>
		</comp-brands>

	</div>
	<app-footer></app-footer>
</template>

<script>
	import Footer from './components/header-footer/Footer.vue';
	import compCars from './components/Cars';
	import compBrands from './components/Cars/Brand.vue';

	export default {
		components: {
			'app-footer': Footer,
			compCars,
			compBrands,
		},
		data() {
			return {
				cars: [
					{ model: 'F9', brand: 'ferrari'},
					{ model: '911', brand: 'porsche'},
					{ model: 'prius', brand: 'toyota'},
				],
				brands: ['Dodge', 'Jeep', 'Toyota']
			}
		},
		provide() {
			return {
				changeCar: this.changeCar,
				cars: this.cars,
			}
		},
		methods: {
			changeCar() {
				this.cars[0].brand = 'Taco'
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
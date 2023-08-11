<template>
	<div>
		<ul>
			<li v-for="(car, i) in cars" :key="car.model + i">
				<span>{{ car.brand }}: &nbsp;</span>
				<span>{{ car.model }}</span>
			</li>
			
		</ul>
		<button @click="changeCar">press</button>
	</div>
</template>

<script>
export default {
	inject: ['cars', 'changeCar'],
	data() {
		return {
			
		}
	}
}
</script>

<style>
	ul {
		text-decoration: none;
		margin-left: 1rem;
	}
	li {
		list-style: none;
		font-size: 2rem;
	}
</style>
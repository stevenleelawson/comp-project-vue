<template>
	<div>
		<ul>
			<li v-for="(car, i) in cars" :key="car.model + i">
				<span>{{ car.brand }}: &nbsp;</span>
				<span>{{ car.model }}</span>
			</li>
			
		</ul>
		<button class="comp__btn" @click="changeCar">press</button>
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

	.comp__btn {
		padding: 1rem;
		border-radius: 50px;
		margin: 5rem 1rem;
	}
</style>
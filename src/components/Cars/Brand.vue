<template>
	<div class="car_brands">
		<h3>Car Brand</h3>
		<slot></slot>
	</div>
</template>

<script>
export default {
	data() {
		return {
		}
	}
}
</script>

<style>
	.car_brands {
		border: 1px solid #2196f3;
		padding: 10px 20px;
	}
</style>
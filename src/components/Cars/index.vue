<template>
	<div>
		<h1>Welcome to the Cars (what)</h1>
		<div>
			<comp-list></comp-list>
		</div>
	</div>
</template>

<script>
import compList from './list.vue';
	export default {
		components: {
			compList
		},
		data() {
			return {}
		}
	}
</script>

<style>
	h1 {
		font-size: 5rem;
	}
</style>
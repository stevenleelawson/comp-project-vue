<template>
	<div>
		<h1>{{ text }}</h1>
		<button @click="this.text = 'changed...'">Trigger update</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				text: 'Lyyyfe'
			}
		},
		beforeCreate() {
			console.log('1 be4 create', this.text)
		},
		created() {
			console.log('2 create', this.text)
		},
		beforeMount() {
			console.log('3 beforemount', this.text)
		},
		mounted() {
			console.log('4 mount', this.text)
		},
		beforeUpdate() {
			console.log('5update', this.text)
		},
	}
</script>
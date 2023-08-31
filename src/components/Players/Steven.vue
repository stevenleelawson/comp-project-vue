<template>
	<h1>This is Steven</h1>
</template>

<script>
	export default {
		name: 'Steven',
		activated() {
			console.log('activated steven')
		},
		deactivated() {
			console.log('deBYEBYEactivated steven')
		},
	}
</script>

<template>
  <div>
	<app-header></app-header>
	<div class="container">
		<div v-awesome="'Lil Baby'"></div>
		<div v-user-lastname="'RUh roh'"></div>
		<h1>arya</h1>
		<compLife></compLife>
	</div>

	<app-footer></app-footer>
  </div>
</template>

<script>
import appFooter from './components/header-footer/Footer.vue'

export default {
	data() {
		return {
			lastName: 'Lawson'
		}
	},
	// HOW TO DECLARE A CUSTOM DIRECTIVE LOCALLY IN THE COMPONENT
	directives: {
		'user-lastname': {
			// NOTE YOU CAN USE LIFECYCLE HOOKS in Custom Directives
			beforeMount(el, binding) {
				el.innerHTML = binding.value
			}
		}
	},
	components: {
		appFooter,
	},
}
</script>

<style>

</style>
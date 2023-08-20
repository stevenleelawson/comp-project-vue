<template>
  <div>
	<app-header></app-header>
	<div class="container">
		<h1>arya bnada</h1>
		<compLife></compLife>
	</div>
	<app-footer></app-footer>
  </div>
</template>

<script>
import compLife from './components/Life';
import appFooter from './components/header-footer/Footer.vue'

export default {
	components: {
		compLife,
		appFooter
	}
}
</script>

<style>

</style>
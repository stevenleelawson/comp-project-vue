<template>
  <div>
	<app-header></app-header>
	<div class="container">
		<h1>arya bands</h1>
		<button @click="this.activeComp = 'compMike'">Mike</button>
		<button @click="this.activeComp = 'compSteven'">Steven</button>

		<!-- standard v-if deal:::::: -->
		<!-- <compMike></compMike>
		<compSteven></compSteven> -->

		<!-- instead of using v-if on the above components, can just do below: -->
		<keep-alive include="Steven">
			<component :is="activeComp"></component>
		</keep-alive>
	</div>

	<app-footer></app-footer>
  </div>
</template>

<script>
import appFooter from './components/header-footer/Footer.vue'
import compMike from './components/Players/Mike.vue';
import compSteven from './components/Players/Steven.vue';
export default {
	components: {
		appFooter,
		compMike,
		compSteven,
	},
	data() {
		return {
			activeComp: 'compSteven'
		}
	}
}
</script>

<style>

</style>
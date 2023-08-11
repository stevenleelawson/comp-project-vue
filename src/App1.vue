<template>
	<app-header></app-header>
	<div class="container">Hello {{ name }}
		<!-- kebab here::::: -->
		<div class="container">
			<compu-user-profile 
				:name="name" 
				:lastname="lastname" 
				:aka="aka"
				:userAge="userAge"
				:userParents="userParents"
				@update-name="aka = $event"
				@say-hello="alertHello"
				:updateAge="updateAge"
			></compu-user-profile>
			<button @click="updateName">update nombre</button>
		</div>
	</div>
	<app-footer></app-footer>
</template>

<script>
	import Footer from './components/header-footer/Footer.vue';
	import compuUserProfile from './User/Profile.vue';

	export default {
		components: {
			'app-footer': Footer,
			// REMEMBER: Vue will automatically make it kebab-case under the hood::::::::::
			compuUserProfile,
		},
		data() {
			return {
				name: 'Arya',
				lastname: 'Lawsonx',
				aka: 'Cookie Teapot',
				userAge: "3",
				userParents: { daddy: 'Steven', mommy: 'None yet'}
			}
		},
		methods: {
			updateName() {
				this.name = 'chipchip'
			},
			alertHello(e) {
				console.log('eeee', e)
				alert(e.target.innerText)
			},
			updateAge(value) {
				this.userAge = value;
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
	}
	div {
		color:orangered;
	}
</style>
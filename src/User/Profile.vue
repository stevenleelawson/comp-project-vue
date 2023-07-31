<template>
	<div class="container">
		<div class="user-profile">
			<h3>user info</h3>
			<ul class="user-list">
				<li><span>Name:</span>{{ name }}</li>
				<li><span>AKA:</span>{{ aka }}</li>
				<li><span>Age:</span>{{ userAge }}</li>
			</ul>
			<ul class="user-list">
				<li v-for="(key, value, index) in userParents" :key="index">{{ value }}: {{ key }}</li>

			</ul>
			<button @click="updateLastname">BUTTTTTTTTON</button>
			<button @click="sayHello">sayhello</button>
			<button @click="updateAge(42)">GEEE</button>
		</div>
	</div>
</template>

<script>
	export default {
		// props: [ 'name', 'aka' ]
		// can also pass props as an object with proptypes (note the Uppercase for String)::::::::
		props: {
			name: String,
			aka: String,
			userAge: Number,
			userParents: Object,
			updateAge: Function
		},
		methods: {
			updateLastname() {
				// EMIT !!!! Is the way to change data in the parent in Vue	
				this.$emit('update-name', 'chipcheeep')
			//	this.$emit('name-of-@-method', $event)
			},
			sayHello(e) {
				this.$emit('say-hello', e)
			}
		}
	}
</script>

<style scoped>
	div {
		color: black;
	}

	span {
		font-weight: 800;
	}
	
	h3 {
		font-size: 3rem;
		color: #fff;
	}
	.user-list {
		margin-left: 2rem;
		
	}

	.user-profile {
		border: 1px solid #fff;
		padding: 10px;
	}
</style>
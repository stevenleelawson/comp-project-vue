<template>
	<div class="container">
		<div class="user-profile">
			<h3>user info</h3>
			<ul class="user-list">
				<li><span>Name:</span>{{ name }}</li>
				<li><span>Last Name:</span>{{ lastname }}</li>
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
			lastname: {
				// NOTE: can validate emits the exact same way
				type: String,
				validator(value) {
					console.log('lastname', value)
					if (value === 'Lawson') {
						return true;
					}
					console.log(`ERROR: lastname prop is ${value} expected lastname to be Lawson`)
					return false;
				}
			},
			// can use a required prop in an obj
			aka: {
				type: String,
				required: true,
			},
			// can use an array for multiple types
			userAge: [Number, String],
			userParents: Object,
			updateAge: Function
		},
		emits: ['say-hello'],
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

	li {
		list-style: none;
		font-size: 2rem;
	}
	
	span {
		padding: 0 1rem;

	}
</style>
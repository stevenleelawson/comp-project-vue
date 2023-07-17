<template>
	<div class="container">
		<div class="user-profile">
			<h3>user info</h3>
			<ul class="user-list">
				<li><span>Name:</span>{{ name }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: [ 'name' ]
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
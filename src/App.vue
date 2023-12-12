<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
	}
</script>

<style scoped>
	@import './styles/main.scss';
	#app {
		font-family: Helvetica, sans-serif;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}
</style>

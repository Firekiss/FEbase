<template>
	<nav>
		<a id="profile" href="/profile">My profile</a>
		<a v-if="admin" id="admin" href="/admin">Admin</a>
		<ul v-show="shouldShowDropdown" id="user-dropdown"></ul>
	</nav>
</template>
	
<script setup lang='ts'>
	import { ref } from 'vue';

	const admin = ref<boolean>(false);
	const shouldShowDropdown = ref<boolean>(false);
</script>
	
<style>
	
</style>
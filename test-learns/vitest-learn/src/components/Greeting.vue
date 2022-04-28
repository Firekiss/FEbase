<template>
	<div>
		{{ greeting }}
	</div>
</template>
	
<script setup lang='ts'>
	import { ref } from 'vue';

	const greeting = ref('Vue and TDD');
</script>
	
<style>
	
</style>
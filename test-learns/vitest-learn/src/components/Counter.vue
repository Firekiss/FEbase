<template>
	<button @click="handleClick">Increment</button>
</template>
	
<script setup lang='ts'>
	import { defineEmits } from 'vue';
	const emit = defineEmits<{
		(e: 'click', info: string) : void
	}>();

	function handleClick():void {
		console.log('has clicked!');
		emit('click', 'increment');
	}

</script>
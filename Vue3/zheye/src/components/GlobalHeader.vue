<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">者也专栏</a>
			<ul v-if="!user.isLogin" class="mb-0 list-inline">
				 <li class="list-inline-item">
          <a class="nav-link" href="#">Home</a>
        </li>
				<li class="list-inline-item">
          <a class="nav-link" href="#">Link</a>
        </li>
			</ul>
			<ul>
				<li class="list-inline-item">
          <a class="nav-link" href="#">你好</a>
        </li>
			</ul>
		</div>
	</nav>
</template>
	
<script lang='ts'>
import { defineComponent, PropType } from 'vue';

export interface UserProps {
	isLogin: boolean;
	name?: string;
	id?: number;
};

export default defineComponent({
	name: 'GlobalHeader',
	props: {
		user: {
			type: Object as PropType<UserProps>,
			required: true
		},
	}
});
</script>
	
<style>
	
</style>
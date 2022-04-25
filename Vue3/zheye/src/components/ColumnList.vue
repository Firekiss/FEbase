<template>
		<div class="row">
			<div v-for="column in list" :key="column.id" class="col-6">
				<div class="shadow-sm card h-100" style="width: 18rem;">
					<img :src="column.avatar" class="card-img-top" :alt="column.title">
					<div class="card-body">
						<h5 class="card-title">{{column.title}}</h5>
						<p class="card-text">{{column.description}}</p>
						<a href="#" class="btn btn-primary">点击跳转</a>
					</div>
				</div>
			</div>
		</div>
</template>
	
<script lang='ts'>
import { defineComponent, PropType } from 'vue';

export interface ColumnProps {
	id: number;
	title: string;
	avatar: string;
	description: string;
}

export default defineComponent({
	name: 'ColumnList',
	props: {
		list: {
			type: Array as PropType<ColumnProps[]>,
			required: true
		}
	}
});
</script>
	
<style>
	
</style>
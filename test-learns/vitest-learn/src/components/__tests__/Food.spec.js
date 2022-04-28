import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import { ref } from 'vue'
import Food from '../Food.vue';


describe('Food.vue 测试', () => {
	test('获取a标签', () => {
		const wrapper = mount(Food);
		const profile = wrapper.get('#profile');
		expect(profile.text()).toBe('My profile');
	});

	test('看看一个元素是否存在', () => {
		const wrapper = mount(Food);
		const admin = wrapper.find('#admin');
		// console.log(admin.exists());
		expect(admin.exists()).toBe(false);
	})

	test('存在', async () => {
		const wrapper = mount(Food, {
			setup(props) {
				const admin = ref(true);
				return { admin };
			}
		});
		const admin = wrapper.find('#admin');
		console.log(admin.exists());
		expect(admin.exists()).toBe(true);
	});

	test('是不是显示的', () => {
		const wrapper = mount(Food);
		const admin = wrapper.find('#user-dropdown');
		console.log(admin.isVisible());
		expect(admin.isVisible()).toBe(false);
	});
});
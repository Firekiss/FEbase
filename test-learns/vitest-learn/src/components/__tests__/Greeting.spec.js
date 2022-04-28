import { describe, expect, test } from 'vitest';
import Greeting from '../Greeting.vue';
import { mount } from '@vue/test-utils';

describe('Greeting.vue', () => {
	test('display', () => {
		const wrapper = mount(Greeting);
		console.log(wrapper.html());
		// 断言
		expect(wrapper.text()).toMatch('Vue and T');
	});
});
import { mount, shallowMount } from '@vue/test-utils'
import { describe, test } from 'vitest';
import Foo from '../Foo.vue';

describe('Foo.vue', () => {
	test('mount', () => {
		const wrapper = mount(Foo);
		console.log(wrapper.html());
	});

	test('shallowMount', () => {
		const wrapper = shallowMount(Foo);
		console.log(wrapper.html());
	});
});
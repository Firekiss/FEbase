import Counter from '../Counter.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('Emit', () => {
	test('emit event Increment', () => {
		const wrapper = mount(Counter);
		wrapper.get('button').trigger('click');
		console.log(wrapper.emitted());
		expect(wrapper.emitted()).toHaveProperty('');
	});
});
<template>
	<div class="pb-3 validate-input-container">
		<input type="text"
			class="form-control"
			:class="{
				'is-invalid': inputRef.error
			}"
			:value="inputRef.value"
			@blur="validateInput"
			@input="updateValue"
		>
		<span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
	</div>
</template>
	
<script lang='ts'>
import { defineComponent, PropType, reactive } from 'vue';
const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z]{2,5}$/;

interface RuleProp {
	type: 'required' | 'email';
	message: string;
}
export type RulesProp = RuleProp[];
export default defineComponent({
	props: {
		rules: Array as PropType<RulesProp>,
		modelValue: String,
	},
	setup(props, context) {
		const inputRef = reactive({
			value: props.modelValue || '',
			error: false,
			message: ''
		});
		const validateInput = () => {
			if (props.rules) {
				const allPassed = props.rules.every(rule => {
					let passed = true;
					inputRef.message = rule.message;
					switch (rule.type) {
						case 'required':
							passed = (inputRef.value.trim() !== '');
							break;
						case 'email':
							passed = emailReg.test(inputRef.value);
							break;
						default:
							break;
					}
					return passed;
				});

				inputRef.error = !allPassed;
			}
		}
		const updateValue = (e: Event) => {
			const targetValue = (e.target as HTMLInputElement).value;
			inputRef.value = targetValue;
			context.emit('update:modelValue', targetValue);
		}

		return {
			inputRef,
			validateInput,
			updateValue,
		}
	}
 });
</script>
	
<style>
	
</style>
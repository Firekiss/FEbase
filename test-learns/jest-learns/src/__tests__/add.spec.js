const add = require('../add');

// 测试单元 验证一个功能的时候一个测试可能不够，往往需要一组测试，所以需要一个单元
describe('测试Add函数', () => {
	test('add(1,2) === 3', () => {
		// 断言
		expect(add(1,2)).toBe(3);
	});

	test('add(2,2) === 3', () => {
		// 断言
		expect(add(2,2)).toBe(4);
	});


})
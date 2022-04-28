const delay = require('../delay');

it('异步测试', done => {
	// 加快时钟
	jest.useFakeTimers();
	delay(() => {
		done();
	});
	jest.runAllTimers();
	expect(true).toBe(true);
});
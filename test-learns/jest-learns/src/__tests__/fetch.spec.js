const { getData } = require('../fetch');
const axios = require('axios');

jest.mock('axios');
it('测试fetch', async () => {
	axios.get.mockResolvedValue('123');
	const data1 = await getData();
	expect(data1).toBe('123');
});


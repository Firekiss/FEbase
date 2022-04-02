const Spider = require('../src/Spider');

const spider = new Spider({
	url: 'https://dogemanga.com/m/zm9IKzoU',
	dist: '/Users/zhangzhitao/comic/'
})

spider.startAll()
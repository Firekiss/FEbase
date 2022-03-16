const { Promise } = require('./simple')

new Promise((resolve) => {
	setTimeout(() => {
		resolve(1)
	}, 500)
})
.then((res) => {
	console.log(res)

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(2)
		}, 500)
	})
})
.then(console.log)

function Promise(fn) {
	this.cbs = []
	this.data = null

	const resolve = (value) => {
		setTimeout(() => {
			this.data = value
			this.cbs.forEach((cb) => cb(value))			
		})
	}

	fn(resolve)
}


Promise.prototype.then = function (onResolve) {
	return new Promise((resolve) => {
		this.cbs.push(() => {
			const res = onResolve(this.data)

			if (res instanceof Promise) {
				res.then(resolve)
			} else {
				resolve(res)
			}
		})
	})
}

module.exports = {
	Promise
}
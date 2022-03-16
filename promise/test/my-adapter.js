const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise(fn) {
	this.state = PENDING
	this.result = null
	this.callbacks = []

	let ignore = false
	let onFulfilled = value => transition(this, FULFILLED, value)
	let onRejected = reason => transition(this, REJECTED, reason)

	let resolve = value => {
		if (ignore) return
		ignore = true
		resolvePromise(this, value, onFulfilled, onRejected)
	}
	let reject = reason => {
		if (ignore) return
		ignore = true
		onRejected(reason)
	}

	try {
		fn(resolve, reject)
	} catch (error) {
		reject(error)
	}
}

function isFunction(f) {
	return typeof(f) === 'function'
}

function isPromise(p) {
	return p instanceof Promise
}

function isThenable(v) {
	return !!v.then
}

function transition(promise, state, result) {
	if (promise.state !== PENDING) return

	promise.state = state
	promise.result = result
	setTimeout(() => handleCallbacks(promise.callbacks, state, result), 0)
}

function resolvePromise(promise, result, resolve, reject) {
	if (promise === result) {
		return reject(new TypeError('can not resolve itself'))
	}

	if (isPromise(result)) {
		return result.then(resolve, reject)
	}

	if (isThenable(result)) {
		try {
			let then = result.then
			if (isFunction(then)) {
				return new Promise(then.bind(result)).then(resolve, reject)
			}
		} catch (error) {
			reject(error)
		}
	}

	resolve(result)
}

function handleCallback(callback, state, result) {
	let { onFulfilled, onRejected, resolve, reject } = callback

	try {
		if (state === FULFILLED) {
			isFunction(onFulfilled) ? resolve(onFulfilled(result)) : resolve(result)
		} else if (state === REJECTED) {
			isFunction(onRejected) ? resolve(onRejected(result)) : reject(result)
		}
	} catch (error) {
		reject(error)
	}
}

function handleCallbacks(callbacks, state, result) {
	while(callbacks.length) {
		handleCallback(callbacks.shift(), state, result)
	}
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
	return new MyPromise((resolve, reject) => {
		let callback = { onFulfilled, onRejected, resolve, reject }

		if (this.state === PENDING) {
			this.callbacks.push(callback)
		} else {
			setTimeout(() => handleCallback(callback, this.state, this.result), 0)
		}
	})
}

MyPromise.prototype.catch = function (onRejected) {
	return this.then(null, onRejected)
}

MyPromise.defer = MyPromise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  })
  return dfd
}

module.exports = MyPromise
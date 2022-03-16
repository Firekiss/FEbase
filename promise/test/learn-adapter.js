// promise 是一个包含 then 方法的对象或者函数
// thenable 是一个包含 then 方法和对象或者函数
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const handleCallback = (callback, state, result) => {
	let { onFulfilled, onRejected, resolve, reject } = callback

	try {
		if (state === FULFILLED) {
			isFunction(onFulfilled) ? resolve(onFulfilled(result)) : resolve(result)
		} else if (state === REJECTED) {
			isFunction(onRejected) ? resolve(onRejected(resilt)) : reject(result)
		}
	} catch (error) {
		reject(error)
	}
}

const handleCallbacks = (callbacks, state, result) => {
	while (callbacks.length) handleCallback(callbacks.shift(), state, result)
}

const transition = (promise, state, result) => {
	if (promise.state !== PENDING) {
		return 
	}

	promise.state = state
	promise.result = result
	setTimeout(() => handleCallbacks(promise.callbacks, state, result), 0)
}

const resolvePromise = (promise, result, resolve, reject) => {
	if (result === promise) {
		let reason = new TypeError('Can not fufill promise with itself')
		return reject(reason)
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
			return reject(error)
		}
	}

	resolve(result)
}

function Promise(f) {
	this.state = PENDING
	this.result = null
	this.callbacks = []

	let onFulfilled = value => transition(this, FULFILLED, value)
	let onRejected = reason => transition(this, REJECTED, reason)

	let ignore = false
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
		f(resolve, reject)
	} catch (error) {
		reject(error)
	}
}

Promise.prototype.then = function(onFulfilled, onRejected) {
	return new Promise((resolve, reject) => {
		let callback = { onFulfilled, onRejected, resolve, reject }

		if (this.state === PENDING) {
			this.callbacks.push(callback)
		} else {
			// promiseA+ 规定 onFulfilled 或者 onRejected 必须在执行栈里面只有平台代码的是才执行
			// 所以使用异步将执行函数放到任务执行栈最后
			setTimeout(() => handleCallback(callback, this.state, this.result), 0)
		}
	})
}
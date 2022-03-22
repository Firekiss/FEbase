function asyncToGenerator(generatorFunc) {
	// 返回一个新的函数
	return function() {
		// 先调用生成器函数 生成迭代器
		const gen = generatorFunc.apply(this, arguments)
		return new Promise((resolve, reject) => {
			function step(key, arg) {
				let generatorResult

				try {
					generatorResult = gen[key](arg)
				} catch (error) {
					return reject(error)
				}

				const { value, done } = generatorResult

				if (done) {
					return resolve(value)
				} else {
					return Promise
						.resolve(value)
						.then(
							val => step('next', val), 
							err => step('throw', err)
						)
				}
			}
			step('next')
		})
	}
}
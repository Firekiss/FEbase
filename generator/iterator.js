// 可迭代对象
// 任何对象都可以添加 Symbol.iterator 函数
// 调用对象的 Symbol.iterator 将创建迭代器
const iterable = {
	[Symbol.iterator]() {
		let step = 0
		const iterator = {
			next() {
				step++

				if (step === 1) {
					return { value: 'This', done: false }
				} else if (step === 2) {
					return { value: 'is', done: false }
				} else if (step === 3) {
					return { value: 'iterable', done: false }
				}

				return { value: undefined, done: true }
			}
		}

		return iterator
	}
}

// var iterator = iterable[Symbol.iterator]()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// 扩展操作符
const array = ['a', 'b', 'c', 'd', 'e']
// 获取迭代器
const iterator = array[Symbol.iterator]()

const newArray = [1]

for (let nextValue = iterator.next(); nextValue.done !== true; nextValue = iterator.next()) {
	newArray.push(nextValue.value)
}

newArray.push(2)
newArray.push(3)

console.log(newArray)
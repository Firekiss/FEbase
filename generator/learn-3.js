// 生成器函数
function * generatorFunc() {
	yield 'a'
	yield 'b'
	yield 'c'
}
// 生成器函数调用后返回生成器对象
// 生成器对象是可迭代对象
// 调用可迭代对象的[Symbol.iterator]方法获得迭代器
// 调用迭代器的next()方法可以获得迭代结果
const generator = generatorFunc()

// for of 只是执行了可迭代对象生成迭代器并不停调用迭代器的next方法

// for (let i of generator) {
// 	console.log(i)
// }
const generatorIterator = generator[Symbol.iterator]()

console.log(generatorIterator.next())
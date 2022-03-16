function * anotherGenerator(i) {
	yield i + 1
	yield i + 2
	yield i + 3
}

function * generator(i) {
	yield * anotherGenerator(i)
}

var gen = generator(1)

console.log(gen.next().value)
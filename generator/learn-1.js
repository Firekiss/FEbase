function * generatorForLoop(num) {
	for (let i = 0; i < num; i++) {
		yield console.log(i)
	}
}

const genForLoop = generatorForLoop(5)

function * generator() {
	yield 1
	return 2
}

const gen = generator()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
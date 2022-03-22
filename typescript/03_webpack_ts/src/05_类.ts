(() => {
	class Person {
		name: string
		age: number
		gender: string

		constructor(name: string, age: number, gender: string) {
			this.name = name
			this.age = age
			this.gender = gender
		}

		sayHi(str: string) {
			console.log(`大家好,我是${this.name},今年已经${this.age}岁了,是个${this.gender}孩子`, str)
		}
	}

	const person = new Person('小甜甜', 18, '女')
	person.sayHi('fuck you!')
})()
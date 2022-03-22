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
			console.log(`我是:${this.name},${str}`)
		}
	}

	class Student extends Person {
		constructor(name: string, age: number, gender: string) {
			super(name, age, gender)
		}

		sayHi() {
			super.sayHi('哈哈')
		}
	}

	const person = new Person('小明', 89, '男')
	person.sayHi('嘎嘎')

	const stu = new Student('小甜甜', 18, '女')
	stu.sayHi()
})()
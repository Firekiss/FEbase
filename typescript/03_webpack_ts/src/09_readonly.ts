(() => {
	class Person {
		// 被readonly修饰符修饰的属性成员
		// 只能在构造函数中修改
		readonly name: string
		constructor(name: string) {
			this.name = name
		}

		sayHi() {
			console.log('你好,', this.name)
		}
	}
	const person: Person = new Person('小甜甜')
	// person.name = '大甜甜'
	console.log(person)
	console.log(person.name)
})()
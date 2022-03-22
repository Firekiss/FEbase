(() => {
	class Person {
		firstName: string
		lastName: string

		constructor(firstName: string, lastName: string) {
			this.firstName = firstName
			this.lastName = lastName
		}
		
		// 读取器 --- 负责读取数据
		get fullName() {
			return this.firstName + '_' + this.lastName
		}

		// 设置器 --- 负责设置数据
		// set fullName() {

		// }
	}

	const person: Person = new Person('东方', '不败')
	console.log(person)
	console.log(person.fullName)
})()
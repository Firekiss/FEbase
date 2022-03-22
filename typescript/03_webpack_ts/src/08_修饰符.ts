(() => {
	class Person {
		public name: string
		
		constructor(name: string) {
			this.name = name
		}

		eat() {
			console.log('嗯,这个骨头真好吃')
		}
	}

	const per = new Person('大蛇丸')
	console.log(per.name)
	per.eat()

	class Student extends Person{
		constructor(name: string) {
			super(name)
		}

		play() {
			console.log('我就喜欢玩', this.name)
		}
	}
})()
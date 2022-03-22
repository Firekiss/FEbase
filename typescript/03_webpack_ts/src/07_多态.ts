(() => {
	// 多态: 父类型的引用指向子类型的对象,不同类型的对象针对相同的方法，产生不同的行为
	class Animal {
		name: string

		constructor(name: string) {
			this.name = name
		}

		run(distance: number = 0) {
			console.log(`跑了${distance}米这么远的距离`)
		}
	}

	class Dog extends Animal {
		constructor(name: string) {
			super(name)
		}

		run(distance: number = 5) {
			console.log(`跑了${distance}米这么远的距离`)
		}
	}

	class Pig extends Animal {
		constructor(name: string) {
			super(name)
		}

		run(distance: number = 10) {
			console.log(`跑了${distance}米这么远的距离`)
		}
	}

	const ani: Animal = new Animal('动物')
	ani.run()

	const dog: Dog = new Dog('大黄')
	dog.run()

	const pig: Pig = new Pig('八戒')
	pig.run()
})()
(() => {
	interface IFly {
		fly(): void
	}

	// IFly约束了当前这个Person类
	class Person implements IFly {
		// 实现接口中的方法
		fly() {
			console.log('我是超人')
		}
	}

	const person = new Person()
	person.fly()

	// 接口可以继承 
	interface IMyFly extends IFly {

	}

	
})()
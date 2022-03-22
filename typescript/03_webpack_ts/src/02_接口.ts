// 接口是对象的状态(属性)和行为(方法)的抽象(描述)
(() => {
	// 定义一个接口类型
	interface IPerson {
		readonly id: number 
		name: string
		age: number
		sex?: string
	}

	const person: IPerson = {
		id: 1,
		name: '小甜甜',
		age: 18,
		// sex: '男'
	}

	
})()
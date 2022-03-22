(() => {
	// console.log('测试')
	let flag:boolean = true

	// 数组类型
	let arr1: number[] = [10, 20, 30]
	// 泛型写法
	let arr2: Array<number> = [100, 200, 300]

	// 枚举类型,枚举里面的每一个数据值都可以叫元素
	enum Color {
		red,
		green,
		blue
	}

	let color: Color = Color.red
	console.log(color)
	console.log(Color.red, Color.green, Color.blue)
	console.log(Color[1])

	let arr: any[] = ['this', 'is', true]

	function getString(str: string | number): string {
		return str.toString()
	}
})()
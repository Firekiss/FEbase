(() => {
	function getArr<T>(num: T, count: number): T[] {
		const arr: T[] = []

		for (let i = 0; i < count; i++) {
			arr.push(num)
		}

		return arr
	}

	const arr = getArr<number>(100.123, 3)
	console.log(arr)
})()
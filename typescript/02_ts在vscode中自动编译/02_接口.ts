(() => {
	// 定义一个接口
	interface IPerson {
		firstName: string
		lastName: string
	}
	// 输出姓名
	function showFullName(person: IPerson) {
		return person.firstName + '_' + person.lastName;
	}
})()
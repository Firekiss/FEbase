// 类型断言
// <类型>变量名
let value: any = 'this is a string';
let len: number = (<string>value).length;
// 变量名 as 类型
let value1: any = 'this is a string';
let len1: number = (value1 as string).length;

// 非空断言
// 明确知道某个值不可能为undefined和null时，你可以在变量后面加上一个!
function fun(value: string | undefined | null) {
	// const str: string = value; // error value 可能是为undefined 和 null
	const str: string = value!;
	// const length: number = value.length; // error value 可能为 undefined 和 null
	const length: number = value!.length;
}

// 确定赋值断言
// 在实例属性和变量声明后面放置一个！号，从而告诉ts该属性会被明确地赋值
// let name!:string;
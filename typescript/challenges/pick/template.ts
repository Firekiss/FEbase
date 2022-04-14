type MyPick<T, K extends keyof T> = {
	[P in K]: T[P]
}

// mapped types
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
type Item = {
	a: string,
	b: number,
	c: boolean
}
type ItemKeys = keyof Item;
// type Copy = {[K in keyof Item]: Item[K]};

// [K in T] T 得是联合类型
// 如果T是属性对象 那么遍历就得是 [K in keyof T]
// keyof 将属性对象所有的property值组合成了联合对象
type Copy<P> = {[K in keyof P]: P[K]};
type ItemCopy = Copy<Item>;

type Create<P extends keyof any, T> = {[K in P]: T};
type Coord = Create<'x' | 'y', number>;

// typeof 在 TypeScript 中，只有对标识符（比如变量名）或者他们的属性使用 typeof 才是合法的。这可能会导致一些令人迷惑的问题： 
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
type Person = typeof MyArray[number];
// 将数组转变为联合类型
const APP = ['TaoBao', 'Tmall', 'Alipay'] as const;  // 首先是使用 as const 将数组变为 readonly 的元组类型
type app = typeof APP[number];

// extends 的使用 
// 条件判断 类似于三元运算符判断真假  用于类和接口的判断 A extend B B中包含的A中肯定有 
// 联合类型 extends 另外一个类型  必须联合类型里面拆分出来的每一项都通过验证才行

// 泛型 extend 类型 然后泛型传入的是联合类型 那么最后得到的类型是 联合类型和extends后类型每一项对比结果的组合类型
type MyPick<T, K> = any

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
const APP = ['TaoBao', 'Tmall', 'Alipay'] as const;
type app = typeof APP[number];
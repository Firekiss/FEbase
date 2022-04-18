// T extends U ? X : Y      extends是一个 条件类型关键字
// T 是否为 U 的子类型 如果是结果为X否则为Y
// 在联合类型中是反直觉的 

// 在类型系统中, 属性更多的类型是子类型
// **** 在集合论中，属性更少的才是子类 联合类型遵守的是集合论, 所以属性更少的才是子类型，多的反而是父类型

/**
 * 1. 父类型比子类型更宽泛，涵盖的范围更广，而子类型比父类型更具体
 * 2. 子类型一定可以赋值给父类型
 */

type a = 'a' | 'b' | 'c' extends 'a' ? 'a' : never;
type b = 'a' | 'b' | 'c' extends 'a' | 'b' | 'c' | 'd' ? 'a' : never;
// 所以联合类型就是拆分出来的每一项都满足extends后面的条件组件才会表示为true

// 分发条件类型
// 如果T是泛型并且是联合类型则会进行自动分配
// A | B | C =>  (A extend U ? X : Y) | (B extend U ? X : Y) | (C extend U ? X : Y)
// 其结果也将会是一个联合类型

// type Extract<T,U> = T extends U ? T : never ;
// Extract<"a" | "b" | "c", "a"> 
// =  "a" extends "a" ? "a" : never | "b" extends "a" ? "a" : never | "c" extends "a" ? "a" : never
// =  "a" | never | never 
// =  "a"

type Length1<T> = T extends { length: number} ? T['length'] : 0;
type Arr = Length1<{
	length: number
}>;

interface IdLabel {
	id: number
}

interface NameLabel {
	name: string
}

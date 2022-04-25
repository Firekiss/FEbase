// type First<T extends any[]> = T extends [] ? never : T[0]
// 可以通过获取数组的长度
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 是否能够解构出来第一个值是一个带推断的类型值
type First<T extends any[]> = T extends [infer R, ...infer N] ? R : never;

// 类型数组也是通过索引来获取第n个类型的,遍历则是使用 P in T[number]
// 类型数组也可以使用 T['length']来获取长度
type ages = [1,2,3];
type t1 = ages[number]; // t1 是一个union类型1
type t2 = 1 extends t1 ? 'true' : 'false';
type peoples = [];
type t3 = peoples[number];  // 变量空类型数组得到never

 
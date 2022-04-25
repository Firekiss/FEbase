// 此处 infer R 代表带推断的类型
type ReturnT<T> = T extends (...args: any[]) => infer R ? R : any;
type fn = () => number;
type fnReturnType = ReturnT<fn>;

type Ids = number[];
type Names = string[];
type Unpacked<T> = T extends Names ? string : T extends Ids ? number : T;

// 如果T是某个待推断类型的数据，则返回推断的类型，否则返回T
type UnpackedS<T> = T extends (infer R)[] ? R : T;

type Resp = Promise<number[]>;
type UnpackedT<T> = T extends Promise<infer R> ? R : T;
type ResType = UnpackedT<Resp>;

// 同一个类型变量在推断的值有多种情况的时候会推断为联合类型
type Foo<T> = T extends { a: infer U, b: infer U } ? U : never;
type T10 = Foo<{ a: string, b: string }>;
type T11 = Foo<{ a: string, b: number }>;

type ElementOf<T> = T extends (infer R)[] ? R : never;
type TTuple = [string, number];
type Union = ElementOf<TTuple>;
// TS是结构性的类型系统 对值所有的结构进行类型检查

// 协变: 允许子类型变换为父类型
// 逆变: 允许父类型变换为子类型
interface Animal {
	age: number
}

interface Dog extends Animal {
  bark(): void
}

let animal: Animal = {
	age: 12
};

let dog: Dog = {
	age: 23,
	bark: () => {}
}

// 协变
animal = dog


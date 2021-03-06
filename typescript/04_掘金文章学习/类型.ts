// 子类是继承自父类 猫是动物的子类
// 子类型是继承父接口 猫这种类型是动物这种类型的子类型

// assignable概念 当一个变量赋值给另外一个变量的时候要检查这两个变量的类型之间是否可以相互赋值

/**
 * 从赋值的角度上来说子类型是可以赋值给父类型的，因为子类型更加的具体，即使赋值给父类型
 * 父类型也不会使用子类型不存在的属性或者方法，保证了安全性，反之则不然
 */

interface Action {
	type: string
}

declare function dispatch<T extends Action>(action: T);
// 这样就约束了传入的参数一定是Action的子类型，一定有type，其他的属性有没有你随意

// 协变
// 子类型的值赋值给父类型 父类型值操作父类型已有的属性和方法不会出现问题

// 逆变
// 父类型参数的函数赋值给子类型参数的函数值来使用，即使传进来实参更加具体的子类型值
// 但是函数内部的操作都是操作父类型值的操作，所以传进来的子类型值肯定可以运行


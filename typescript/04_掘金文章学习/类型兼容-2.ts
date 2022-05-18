// ts是结构类型 
// java 是名义上类型化的语言
interface Pet {
	name: string;
}

class Dog {
	name: string;
}

let pet: Pet;
pet = new Dog();

let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK y函数原本能做的事情x函数也能做

enum EventType {
	Mouse,
	Keyboard,
}

// 事件接口
interface Event {
	timestamp: number;
}
interface MyMouseEvent extends Event {
	x: number;
	y: number;
}
interface MyKeyEvent extends Event {
	keyCode: number;
}

function listenEvent(eventType: EventType, handler: (n: Event) => void) {}

// MyMouseEvent是Event的子类型，更加的具体会包含
listenEvent(EventType.Mouse, (e: MyMouseEvent) => console.log(e.x + ',' + e.y))
listenEvent(EventType.Mouse, (e: Event) => console.log((e as MyMouseEvent).x + ',' + (e as MyMouseEvent).y))
listenEvent(EventType.Mouse, ((e: MyMouseEvent) => console.log(e.x + ',' + e.y)) as (e: Event) => void)

// invoke 调用
function invokeLater(args: any[], callback: (...args: any[]) => void) {}
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y))
invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y))
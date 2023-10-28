// Primiive types:

// Number:
// String:
// Boolean:
// Undefined:
// Null:
// Symbol:
// BigInt

// ! 														     Objects

// =========================  1 ==================
// objects
interface userType {
	readonly name: string;
	surname: string;
	patronimic?: string;
	age: number | string;
	friends: {
		friend1: string;
		friend2: string;
	};
}

const user: userType = {
	name: "rus",
	surname: "tem",
	age: "30",
	friends: {
		friend1: "ubaidula",
		friend2: "seyfula",
	},
};

const user2 = {} as userType;

// user.name = 'Rus'   // error readonly

// =========================  1.1 ==================

interface Rect {
	readonly id: string;
	color?: string;
	size: {
		width: number;
		heigth: number;
	};
}

const person: Rect = {
	id: "0213kfdsmkds921324r953jgjfin9438",
	color: "red",
	size: {
		width: 22,
		heigth: 10,
	},
};

interface RectArea extends Rect {
	getArea: () => number;
}

const person2: RectArea = {
	id: "23123",
	size: {
		width: 22,
		heigth: 10,
	},
	getArea(): number {
		return this.size.width + this.size.heigth;
	},
};
console.log(person2.getArea);

// =========================  1.2 ==================

interface Styles {
	[key: string]: string;
}

const css: Styles = {
	border: "1px",
	width: "25px",
	margind: "5px",
};

// =========================  2 ==================
// array of number'

// ! 																Arrays

let numbers: number[] = [1, 2, 3, 4, 5];
// let numbers: Array<number> = [1, 2, 3, 4, 5];

// Both syntaxes achieve the same thing, so you can use whichever one you prefer.

// =========================  3 ==================
// array of matrix

let matrix: number[][] = [[2], [2], [2], [2]];
// =========================  4 ==================
// mixed array of number and string

let mixedArray: (number | string)[] = [1, "two", 3, "four", 5];

// =========================  5 ==================
//  =Tuple (when it's mixed)
const tuple: [string, number] = ["Ruslan", 30];




// =========================  6 ==================

// enums in TypeScript help make your code more readable, maintainable, and type-safe by providing a way to define a set of named constants with compile-time checks. They are particularly useful when dealing with scenarios where you have a finite, predefined set of values.

enum Day {
	Monday,
	Thusday,
	Wen,
	Thur,
}

const day = Day[2]; // Wen
const day2 = Day.Monday; // 0

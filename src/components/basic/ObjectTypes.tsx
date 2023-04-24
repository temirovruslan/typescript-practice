// =========================  1 ==================
// objects
interface userType {
	name: string;
	surname: string;
	patronimic?: string;
	age: number | string;
	friends: {
		friend1: string;
		friend2: string;
	};
}

let user: userType = {
	name: "rus",
	surname: "tem",
	age: "30",
	friends: {
		friend1: "ubaidula",
		friend2: "seyfula",
	},
};
// =========================  2 ==================
// array of number'

let numbers: number[] = [1, 2, 3, 4, 5];
// let numbers: Array<number> = [1, 2, 3, 4, 5];

// Both syntaxes achieve the same thing, so you can use whichever one you prefer.

// =========================  3 ==================
// array of matrix

let matrix: number[][] = [[2], [2], [2], [2]];
// =========================  4 ==================
// mixed array of number and string

let mixedArray: (number | string)[] = [1, "two", 3, "four", 5];



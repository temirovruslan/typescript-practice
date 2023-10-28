//!                                                                  Functions

// =========================  1 ==================
// typying functions:
interface AddNumbersFunction {
	(a: number, b: number): number;
}

const addNumbers: AddNumbersFunction = (a, b) => {
	return a + b;
};
// =========================  2 ==================
// second function  returns string
function concatStr(a: string, b: string): string {
	return a + b;
}
// =========================  3 ==================
// empty nothing returns function
function empty(a: string, b: string): void {
	console.log("Function dosnt return anything");
}

// type ReturnArrayType = (num: number) => number[];

function returnArray(num: number): number[] {
	let result = [];
	for (let i = 0; i < num; i++) {
		result.push(i);
	}
	return result;
}

// Funciton returns error or infinite

function errorRetur(message: string): never {
	throw new Error(message);
}

function returnInfinite(): never {
	while (true) {}
}


// ! ======================================================================= generics

// A generic function to print the contents of an array.

// function print<T>(items: T[]): T[] {
// 	items.forEach((el) => console.log(el));
// 	return items;
// }

// const numbers: number[] = [1, 2, 3, 4];
// const str: string[] = ["ru", "tem"];

// const printedNumbers = print(numbers);
// const printedStrings = print(str);

// console.log(printedNumbers); // Will be the same as 'numbers'
// console.log(printedStrings); // Will be the same as 'str'

function filterArray<T>(arr: T[], predicate: (element: T) => boolean): T[] {
    return arr.filter(predicate);
  }
  
  // Example usage:
  const numbers1: number[] = [1, 2, 3, 4, 5];
  const isEven = (n: number) => n % 2 === 0;
  const evenNumbers = filterArray(numbers, isEven); // Returns [2, 4]
  
  const fruits: string[] = ["apple", "banana", "cherry", "date"];
  const startsWithA = (fruit: string) => fruit.startsWith("a");
  const aFruits = filterArray(fruits, startsWithA); // Returns ["apple"]
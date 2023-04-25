// =========================  1 ==================
// typying functions:
interface AddNumbersFunction {
	(a: number, b: number): number;
}

const addNumbers: AddNumbersFunction = (a, b) => {
	return a + b;
};
// =========================  2 ==================
// second function
function concatStr(a: string, b: string): string {
	return a + b;
}
// =========================  3 ==================
// empty nothing returns function
function empty(a: string, b: string): void {}

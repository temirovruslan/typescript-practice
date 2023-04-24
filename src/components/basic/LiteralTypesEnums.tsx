// =========================  1 ==================

interface MyInterface {
	direction: "up" | "down" | "left" | "right";
}

const directionSide = (a: MyInterface) => {
	console.log(a);
};

const myObject: MyInterface = {
	direction: "down",
};

directionSide(myObject);

// It defines an interface MyInterface with a direction property that can only have one of the four string values "up", "down", "left", or "right".

// It also defines a function directionSide that takes a parameter a of type MyInterface and logs it to the console.

// It then creates an object myObject that conforms to the MyInterface interface by setting the direction property to the value "down".

// Finally, it calls the directionSide function with myObject as an argument, which logs the object to the console.

// The code should execute without any errors, since it conforms to the type constraints defined by the MyInterface interface.

// =========================  2 ==================

const enum Direction2 {
	Up = "UP",
	Down = "DOWN",
	Left = "LEFT",
	Right = "RIGHT",
}

interface MyInterface2 {
	direction2: Direction2;
}

const myObj: MyInterface2 = {
	direction2: Direction2.Up,
};

function logDirection(direction: Direction2) {
	console.log(direction);
}

logDirection(Direction2.Down);

// In this example, we define an enum called Direction with four members: Up, Down, Left, and Right. Each member is assigned a string value, which we can use to represent the corresponding direction.

// We also define an interface MyInterface with a direction property of type Direction. This means that any object that conforms to the MyInterface interface must have a direction property that is one of the members of the Direction enum.

// We create an object myObject that conforms to the MyInterface interface by setting the direction property to the Direction.Up member of the enum.

// We also define a function logDirection that takes a parameter of type Direction and logs it to the console.

// Finally, we call the logDirection function with the Direction.Down member of the enum, which logs the value "DOWN" to the console.

// Using an enum with an interface like this can make your code more readable and expressive, since it allows you to use meaningful names for your values instead of hard-coding string or number values directly into your code.
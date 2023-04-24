// interface can be extended from type

interface UserInfoType {
	phone: string;
}

interface UserType extends UserInfoType {
	name: string;
	readonly surname: string;
	patronimic?: string;
	age: number | string;
	friends: {
		friend1: string;
		friend2: string;
	};
}

interface Costumer {
	user: UserType;
	bill: number;
}

const costumer: Costumer = {
	user: {
		name: "rus",
		surname: "tem",
		age: 30,
		friends: {
			friend1: "alan",
			friend2: "dalan",
		},
		phone: "+3725530939",
	},
	bill: 30,
};

// costumer.user.surname = 'said' error message because readonly
// costumer.user.name = 'said' no error message

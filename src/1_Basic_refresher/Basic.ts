import axios from "axios";

//2) [ ] create a function that concatenates/combines 2 words
export function merge(string1, string2) {
	return string1 + string2;
}
//4) [ ] create a class called "Car" that has properties brand of type string and price of type number
export class Car {
	brand: string;
	price: number;

	constructor(brand, price) {
		this.brand = brand;
		this.price = price;

		Car.parking.push(this);
	}
	//6) [ ] add a honk method to the Car class that returns the string 'honk'.
	honk() {
		return "honk";
	}
	//8) [ ] add a title method to the Car class that takes a name argument and returns the string 'my name is <name> and my brand is <brand>'
	title(name: string) {
		return `my name is ${name} and my brand is ${this.brand}`;
	}
	//10) [ ] Create an array called parking
	static parking = [];
	//12) [ ] Create a function called "totalPrice" that returns the total price of all cars.
	totalPrice() {
		let totalPrice: number = 0;
		Car.parking.forEach((car) => {
			totalPrice += car.price;
		});
		return totalPrice;
	}
}

export async function getData() {
	return {
		data: (await axios.get("https://jsonplaceholder.typicode.com/todos/1"))
			.data,
	};
}
//14) [ ] Create a getData function that retrieves data from "https://jsonplaceholder.typicode.com/todos/1"
//14 note:  axios returns data in { data: (....) } key.
// The returned data has the following object format
// {
//  "userId": 1,
//  "id": 1,
//  "title": "delectus aut autem",
//  "completed": false
// }

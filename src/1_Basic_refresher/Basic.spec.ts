import { merge, Car, getData } from "./Basic";
import axios from "axios";

describe("Basic", () => {
	//0) [ ] Review package.json basics. Understand what happens when 'npm run test' is executed.
	//1) [ ] Write a test for a function that concatonates two strings.
	test("function that concatonates two strings", () => {
		expect(merge("first name ", "last name")).toBe("first name last name");
	});
	//3) [ ] Write a test to create an instance of a car class with properties brand of type string and price of type number
	const Honda = new Car("Honda", 76875);
	test("create class Car", () => {
		expect(Honda.brand).toBe("Honda");
		expect(Honda.price).toBe(76875);
	});
	//5) [ ] Write a test to see if there is a method to the car class called honk that returns the string 'honk'
	test("Method in car that returns 'honk'", () => {
		expect(Honda.honk()).toBe("honk");
	});
	//7) [ ] Write a test to see if there is a method to the car class called title that takes a name argument and returns the string 'my name is <name> and my brand is <brand>'
	test("Method in car that returns 'honk'", () => {
		expect(Honda.title("Bob")).toBe("my name is Bob and my brand is Honda");
	});
	//9) [ ] Write a test to see if an array called 'parking' can holds instances of cars.
	test("array called 'parking' that holds instances of cars", () => {
		expect(Car.parking).toContain(Honda);
	});
	//11) [ ] Write a test for a function called "totalPrice" that returns the total price of all cars in the parking lot given the array as an argument
	test("totalPrice returns the total price of all cars in the parking lot", () => {
		const Honda = new Car("Ford", 98322);
		expect(Honda.totalPrice()).toBe(76875 + 98322);
	});
	//13) [ ] Write a test for a function called "getData" that calls an API with axios and returns a object with the key of 'data' and a value object with properties 'words' of type string and 'numbers' of type numbers
	//13) Note: use this mock result structure {data: { words: "string", numbers: 5}}
	//13a) verify if axios is installed via package.json file
	//13b) Install axios
	//13c) import axios, mock it, write the mock response, then write the test.
	test("Function getData returns a object with the key of 'data' and a value object with properties 'words' of type string and 'numbers' of type numbers from 'https://jsonplaceholder.typicode.com/todos/1'", async () => {
		expect(await getData()).toEqual({
			data: {
				userId: 1,
				id: 1,
				title: "delectus aut autem",
				completed: false,
			},
		});
	});
});

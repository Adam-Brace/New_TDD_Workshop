import { adds, subtracts, multiplies } from "./Numbers";

describe("Numbers", () => {
	test("adds() should add two numbers", () => {
		expect(adds(1, 2)).toEqual(3);
	});
	test("subtracts() should subtract two numbers", () => {
		expect(subtracts(2, 1)).toEqual(1);
	});
	test("multiplies() should multiply two numbers", () => {
		expect(multiplies(1, 2)).toEqual(2);
	});
});

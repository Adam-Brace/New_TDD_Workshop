// Don't forget to import your functions
import { exporter } from "./Drivers";
describe("Drivers", () => {
	test("Check if 10 equals 'too young'", () => {
		expect(exporter(10)).toBe("too young");
	});
	test("Check if 100 equals 'too old'", () => {
		expect(exporter(100)).toBe("too old");
	});
	test("Check if 20 equals 'eligible'", () => {
		expect(exporter(20)).toBe("eligible");
	});
});

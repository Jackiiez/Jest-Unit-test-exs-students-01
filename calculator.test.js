const { add, subtract } = require("./calculator");

describe("Calculator functions", () => {
	test("add should return the sum of two numbers", () => {
		expect(add(1, 2)).toBe(3);
		expect(add(-1, -2)).toBe(-3);
		expect(add(1, -1)).toBe(0);
	});

	test("subtract should return the difference between two numbers", () => {
		expect(subtract(3, 2)).toBe(1);
		expect(subtract(-1, -2)).toBe(1);
		expect(subtract(1, -1)).toBe(2);
	});
});
const { isValidEmail } = require("./email");
describe("check if email is correct", () => {
	test("check if email is correct", () => {
        expect(isValidEmail('jagi@gmail.com')).toBe(true);
	});
});
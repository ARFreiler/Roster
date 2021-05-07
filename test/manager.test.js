const Manager = require("../lib/manager");

test("Can set office number via constructor function", () => {
    const testValue = 301;
    const emp = new Manager("Tina", 2, "test@testmail.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const emp = new Manager("Kristen", 3, "test@testmail.com", 301);
    expect(emp.getRole()).toBe(testValue);
});

test("Can get manager office number via getOfficeNumber()", () => {
    const testValue = 301;
    const emp = new Manager("Emily", 4, "test@testmail.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
});
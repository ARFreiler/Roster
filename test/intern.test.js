const { TestScheduler } = require("jest");
const Intern = require("../lib/intern");

test("Can set intern's school vis constructor function", () => {
    const testValue = "Penn";
    const emp = new Intern("Dominica", 2, "test@testmail.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const emp = new Intern("Laura", 3, "test@testmail.com", "Penn");
    expect(emp.getRole()).toBe(testValue);
});

test("Can get school name via getSchool()", () => {
    const testValue = "Penn";
    const emp = new Intern("Kate", 4, "test@testmail.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});
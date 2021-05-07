const { TestScheduler } = require("jest");
const Engineer = require("../lib/engineer");

test("Can set GitHub account via constructor function", () => {
    const testValue = "GitUserName";
    const emp = new Engineer("Kelsee", 2, "test@testmail.com", testValue);
    expect(emp.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Megan", 3, "test@testmail.com", "GitUserName");
    expect(emp.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGitHub()", () => {
    const testValue = "GitUserName";
    const emp = new Engineer("Rachael", 4, "test@testmail.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
});
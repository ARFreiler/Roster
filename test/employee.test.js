const Employee = require("../lib/employee");

describe("Employee", () => {
    it("Should initiate the employee section", () => {
        const emp = new Employee();
        expect(typeof (emp)).toBe("object");
    });

    it("Can set a name with constructor function arguements", () => {
        const name = "Bronwynn";
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
    });

    it("Can set an ID with constructor function arguements", () => {
        const testValue = 360;
        const emp = new Employee("Audrey", testValue);
        expect(emp.id).toBe(testValue)
    });

    it("Can set an email with constructor function arguements", () => {
        const testValue = "test@testmail.com";
        const emp = new Employee("Rory", 180, testValue);
        expect(emp.email).toBe(testValue);
    });
});

describe("getName", () => {
    it("Can get a name via getName()", () => {
        const testValue = "Teresa";
        const emp = new Employee(testValue);
        expect(emp.getName()).toBe(testValue);
    });
});

describe("getID", () => {
    it("Can get a ID via getID()", () => {
        const testValue = 90;
        const emp = new Employee("Allegra", testValue);
        expect(emp.getId()).toBe(testValue);
    });
});

describe("getEmail", () => {
    it("Can get a Email via getEmail()", () => {
        const testValue = "test@testmail.com";
        const emp = new Employee("Tara", 1, testValue);
        expect(emp.getEmail()).toBe(testValue);
    });
});

describe("getRole", () => {
    it("getRole() should return \"Employee\"", () => {
        const testValue = "Employee";
        const emp = new Employee("Sierra", 420, "test@testmail.com");
        expect(emp.getRole()).toBe(testValue);
    });
});

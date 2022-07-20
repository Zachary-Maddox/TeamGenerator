const Employee = require("../lib/Employee");

test("Employee name matches", () => {
  const myEmployee = new Employee("Bob");
  expect(myEmployee.name).toBe("Bob");
});


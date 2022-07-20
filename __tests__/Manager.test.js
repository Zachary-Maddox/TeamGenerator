const Manager = require("../lib/Manager");

test("Manager officeNumber works", () => {
  const myManager = new Manager("John", 1, "John@aol.com", 13);
  expect(myManager.officeNumber).toBe(13);
});
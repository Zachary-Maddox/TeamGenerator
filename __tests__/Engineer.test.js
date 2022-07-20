const Engineer = require("../lib/Engineer");

test("Engineer github works", () => {
  const myEngineer = new Engineer("Bob", 1, "bob@aol.com", "BobVance");
  expect(myEngineer.github).toBe("BobVance");
});
const Intern = require("../lib/Intern");


test("Intern school works", () => {
  const myIntern = new Intern("John", 1, "John@aol.com", "UCF");
  expect(myIntern.school).toBe("UCF");
});

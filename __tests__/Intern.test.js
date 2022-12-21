// connect to the Intern.js
const Intern = require("../lib/Intern");

// test the arguments and functions added in class Engineer

test("Should set school", () => {
  const internSchool = "Rutgers";
  const Azime = new Intern("Azime", 312, "hello@gmail.com", internSchool);
  expect(Azime.school).toBe(internSchool);
});

test("Should get school", () => {
  const internSchool = "Rutgers";
  const Azime = new Intern("Azime", 312, "hello@gmail.com", internSchool);
  expect(Azime.getSchool()).toBe(internSchool);
});

test("Should get role", () => {
  const internRole = "Intern";
  const Azime = new Intern("Azime", 312, "hello@gmail.com", "Rutgers");
  expect(Azime.getRole()).toBe(internRole);
});
const Intern = require("../lib/Intern");

test("Should set school", () => {
  const internSchool = "Rutgers";
  const Azime = new Intern("Azime", 312, "hello@gmail.com", internSchool);
  expect(Azime.school).toBe(internSchool);
});

test("Should get school", () => {
  const internSchool = "Rutgers";
  const Azime = new Intern("Azime", 312, "hello@gmail.com", ineternSchool);
  expect(Azime.getSchool()).toBe(internSchool);
});

test("Should get role", () => {
  const internRole = "Intern";
  const Azime = new Intern("Azime", 312, "hello@gmail.com", "azimezn");
  expect(Azime.getRole()).toBe(internRole);
});
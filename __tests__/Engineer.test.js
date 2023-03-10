// connect to the Engineer.js
const Engineer = require("../lib/Engineer");

// test the arguments and functions added in class Engineer

test("Should set GitHub account", () => {
  const engineerGithub = "azimezn";
  const Azime = new Engineer("Azime", 312, "hello@gmail.com", engineerGithub);
  expect(Azime.github).toBe(engineerGithub);
});

test("Should get GitHub account", () => {
  const engineerGithub = "azimezn";
  const Azime = new Engineer("Azime", 312, "hello@gmail.com", engineerGithub);
  expect(Azime.getGithub()).toBe(engineerGithub);
});

test("Should get role", () => {
  const engineerRole = "Engineer";
  const Azime = new Engineer("Azime", 312, "hello@gmail.com", "azimezn");
  expect(Azime.getRole()).toBe(engineerRole);
});

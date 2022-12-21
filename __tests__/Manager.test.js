// connect to the Manager.js
const Manager = require("../lib/Manager");

// test the arguments and functions added in class Engineer

test("Should set office number", () => {
    const managerNumber = "1234567890";
    const Azime = new Manager("Azime", 312, "hello@gmail.com", managerNumber);
    expect(Azime.number).toBe(managerNumber);
});

test("Should get school", () => {
    const managerNumber = "1234567890";
    const Azime = new Manager("Azime", 312, "hello@gmail.com", managerNumber);
    expect(Azime.getNumber()).toBe(managerNumber);
  });

test("Should get role", () => {
    const managerRole = "Manager";
    const Azime = new Manager("Azime", 312, "hello@gmail.com", "1234567890");
    expect(Azime.getRole()).toBe(managerRole);
});


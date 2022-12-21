// connect to the Employee.js
const Employee = require("../lib/Employee");

// test the arguments and functions of class Employee

test("Should instantiate Employee instance", () => {
  const newEmployee = new Employee();
  expect(typeof newEmployee).toEqual("object");
});

test("Should set name of an Employee", () => {
  const employeeName = "Azime";
  const Azime = new Employee(employeeName);
  expect(Azime.name).toBe(employeeName);
});

test("Should set ID of an Employee", () => {
  const employeeID = 312;
  const Azime = new Employee("Azime", employeeID);
  expect(Azime.id).toBe(employeeID);
});

test("Should set email of an Employee", () => {
  const employeeEmail = "hello@gmail.com";
  const Azime = new Employee("Azime", 312, employeeEmail);
  expect(Azime.email).toBe(employeeEmail);
});

test("Should get name", () => {
  const employeeName = "Azime";
  const Azime = new Employee(employeeName);
  expect(Azime.getName()).toBe(employeeName);
});

test("Should get ID", () => {
  const employeeID = 312;
  const Azime = new Employee("Azime", employeeID);
  expect(Azime.getID()).toBe(employeeID);
});

test("Should get email", () => {
  const employeeEmail = "hello@gmail.com";
  const Azime = new Employee("Azime", 312, employeeEmail);
  expect(Azime.getEmail()).toBe(employeeEmail);
});

test("Should get role", () => {
  const employeeRole = "Employee";
  const Azime = new Employee("Azime", 312, "hello@gmail.com");
  expect(Azime.getRole()).toBe(employeeRole)
});

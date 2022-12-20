const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Inern = require("./lib/Intern")

// const $teamMember = document.querySelector(".team-member")

function init() {
    addManager();
}
init();

function addManager() {
    Manager.name = prompt("What is the team manager's\n name?");
    Manager.ID = prompt("What is the team manager's\n employee ID?");
    Manager.email = prompt("What is the team manager's\n email?");
    Manager.number = prompt("What is the team manager's\n office number?");
}


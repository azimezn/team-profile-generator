const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");

const questions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the team manager's employee ID?",
        name: 'managerID',
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerNumber',
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'addMember',
        choices: ["Engineer", "Intern", "I don't need to add any more members."],
    },
];

function init() {

    inquirer
        .prompt(questions)
        .then((data) => {
            fs.writeFileSync("index.html", generateHTML({ ...data }), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
}

init();




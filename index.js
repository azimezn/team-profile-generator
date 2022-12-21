// nodes
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");

// classes
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");

const teamMembers = [];
const employeeIDs = [];

const questions = {
    manager: [
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
        }],

    engineer: [
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'engineerName',
        },
        {
            type: 'input',
            message: "What is the engineer's employee ID?",
            name: 'engineerID',
        },
        {
            type: 'input',
            message: "What is the engineer's email?",
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub username?",
            name: 'engineerGithub',
        },
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'addMember',
            choices: ["Engineer", "Intern", "I don't need to add any more members."],
        }],

    intern: [
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'internName',
        },
        {
            type: 'input',
            message: "What is the intern's employee ID?",
            name: 'internID',
        },
        {
            type: 'input',
            message: "What is the intern's email?",
            name: 'internEmail',
        },
        {
            type: 'input',
            message: "What is the intern's school?",
            name: 'internSchool',
        },
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'addMember',
            choices: ["Engineer", "Intern", "I don't need to add any more members."],
        }]
}

function addManager() {
    inquirer
        .prompt(questions.manager)
        .then((data) => {
            const member = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerNumber)
            teamMembers.push(member);
            employeeIDs.push(data.managerID);
            if (data.addMember == "Engineer") {
                return addEngineer();
            } else if (data.addMember == "Intern") {
                return addIntern();
            } else {
                return createTeam();
            }
        })
}

function addEngineer() {
    inquirer
        .prompt(questions.engineer)
        .then((data) => {
            const member = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub)
            teamMembers.push(member);
            employeeIDs.push(data.engineerID);
            if (data.addMember == "Engineer") {
                return addEngineer()
            } else if (data.addMember == "Intern") {
                return addIntern()
            } else {
                return createTeam();
            }
        })
}

function addIntern() {
    inquirer
        .prompt(questions.intern)
        .then((data) => {
            const member = new Intern(data.internName, data.internID, data.internEmail, data.internSchool)
            teamMembers.push(member);
            employeeIDs.push(data.internID);
            if (data.addMember == "Engineer") {
                return addEngineer()
            } else if (data.addMember == "Intern") {
                return addIntern()
            } else {
                return createTeam();
            }
        })
}

function createTeam() {
    fs.writeFileSync("./dist/index.html", generateHTML(teamMembers), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

function init() {
    addManager();
}
init();







//pseudo code

// 3.
// create variable to hold the path to dist subfolder using path lib resolve method
// create variable to hold the path to team.html using path lib join method

// 5.
// print user of usage

// 8.
// create team function
// - prompt user with the list of choices for Engineer, Intern, or End of adding employee for the team
// - in .then callback function check what the user choice is and make call to the corresponding functions respectively
// - make call to add-engineer-function if the choice is engineer
// - make call to add-intern-function if choice is intern
// - make call to build-team function if choice is end of adding employee

// 10.
// build team function
// - check existing of dist subfolder
// - if not exist, create the dist subfolder
// - make call to imported render function passing employee member array as argument and assign returned html to a variable
// - make call to fs write file function passing the html file path, html variable







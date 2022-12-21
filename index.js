// nodes
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");
const pageTemplate = require("./src/page-template");

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
        if (data.addMember == "Engineer") {
            return addEngineer()
        } else if (data.addMember == "Intern") {
            return addIntern()
        } else {

        }
    })
}

function addEngineer() {
    inquirer
        .prompt(questions.engineer)
        .then((data) => {
            if (data.addMember == "Engineer") {
                return addEngineer()
            } else if (data.addMember == "Intern") {
                return addIntern()
            } else {

            }
        })
}

function addIntern() {
    inquirer
        .prompt(questions.intern)
        .then((data) => {
            if (data.addMember == "Engineer") {
                return addEngineer()
            } else if (data.addMember == "Intern") {
                return addIntern()
            } else {

            }
        })
}


// function init() {

//     inquirer
//         .prompt(questions)
//         .then((data) => {
//             fs.writeFileSync("index.html", generateHTML({ ...data }), (err) =>
//                 err ? console.log(err) : console.log('Success!')
//             );
//         });
// }

// init();










//pseudo code


// 3.
// create variable to hold the path to dist subfolder using path lib resolve method
// create variable to hold the path to team.html using path lib join method

// 5.
// print user of usage

// 6.
// make call to create manager function to start the main process

// 7.
// create manager function
// - ask the questions for name, id, email, office number for manager using inquirer
// - in the .then callback function, create manager object by instantiating Manager class instance, passing in name, id, office number as arguments to constructor
// - push the manager object to the employee member array
// - push the manager id to the employee id array
// - make call to the create team function

// 8.
// create team function
// - prompt user with the list of choices for Engineer, Intern, or End of adding employee for the team
// - in .then callback function check what the user choice is and make call to the corresponding functions respectively
// - make call to add-engineer-function if the choice is engineer
// - make call to add-intern-function if choice is intern
// - make call to build-team function if choice is end of adding employee

// 8.
// add engineer function
// - prompt user with questions for engineer name, id, email, and github name
// - in .then callback create engineer object by instantiating Engineer class instance passing name, id, email, and github as arguments to class constructor
// - push engineer object to employee member array
// - push engineer id to employee id array
// - make call to create team function

// 9.
// add intern function
// - prompt user with questions for intern name, id, email, and school
// - in .then callback create intern object by instantiating Intern class instance passing name, id, email, and school as arguments to class constructor
// - push intern object to employee member array
// - push intern id to employee id array
// - make call to create team function

// 10.
// build team function
// - check existing of dist subfolder
// - if not exist, create the dist subfolder
// - make call to imported render function passing employee member array as argument and assign returned html to a variable
// - make call to fs write file function passing the html file path, html variable







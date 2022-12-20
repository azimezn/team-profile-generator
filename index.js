//const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Inern = require("./lib/Intern")

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


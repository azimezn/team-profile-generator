const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // arguments from Employee
        super(name, id, email)
        // added argument
        this.school = school;
    }

    // the information in HTML format, ready to be added directly into the HTML
    getHTML() {
        return  `<div class="col-sm-6">
        <div class="card h-100">
            <div class="card-body">
                <h2 class="card-title">${this.name}<br>Intern</h2>
                <ul class="card-text bullets">
                    <li>Employee ID: ${this.id}</li>
                    <li><a href="mailto:${this.email}">Email: ${this.email}</a></li>
                    <li>School: ${this.school}</li>
                </ul>
            </div>
        </div>
    </div>`
    }

    // I don't need these because I did it a different way, but I kept them because it was in the instructions
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern


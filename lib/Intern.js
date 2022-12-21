const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

    getHTML() {
        return  `<div class="col-sm-6">
        <div class="card h-100">
            <div class="card-body">
                <h2 class="card-title">${this.name}<br>Intern</h2>
                <ul class="card-text">
                    <li>${this.id}</li>
                    <li><a href="mailto:${this.email}">${this.email}</a></li>
                    <li>${this.school}</li>
                </ul>
            </div>
        </div>
    </div>`
    }
}

module.exports = Intern


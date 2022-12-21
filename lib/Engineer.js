const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

    getHTML() {
        return `<div class="col-sm-6">
        <div class="card h-100">
            <div class="card-body">
                <h2 class="card-title">${this.name}<br>Engineer</h2>
                <ul class="card-text">
                    <li>${this.id}</li>
                    <li><a href="mailto:${this.email}">${this.email}</a></li>
                    <li><a href="https://github.com/${this.github}" target="_blank">${this.github}</a></li>
                </ul>
            </div>
        </div>
    </div>`
    }
}

module.exports = Engineer
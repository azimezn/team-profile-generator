const Employee = require("./Employee");

class Engineer extends Employee {
    // assign arguments
    constructor(name, id, email, github) {
        // arguments from Employee
        super(name, id, email)
        // added argument
        this.github = github;
    }

    // the information in HTML format, ready to be added directly into the HTML
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

    // I don't need these because I did it a different way, but I kept them because it was in the instructions
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }


}

module.exports = Engineer
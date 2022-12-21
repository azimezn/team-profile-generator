const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, number) {
        // arguments from Employee
        super(name, id, email)
        // added argument
        this.number = number;
    }

    // the information in HTML format, ready to be added directly into the HTML
    getHTML() {
        return `<div class="col-sm-6">
        <div class="card h-100">
            <div class="card-body">
                <h2 class="card-title">${this.name}<br>Manager</h2>
                <ul class="card-text">
                    <li>${this.id}</li>
                    <li><a href="mailto:${this.email}">${this.email}</a></li>
                    <li>${this.number}</li>
                </ul>
            </div>
        </div>
    </div>`
    }

    // I don't need these because I did it a different way, but I kept them because it was in the instructions
    getNumber() {
        return this.number;
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager
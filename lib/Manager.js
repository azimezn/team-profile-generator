const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email)
        this.number = number;
    }

    getNumber() {
        return this.number;
    }

    getRole() {
        return "Manager"
    }

    getHTML() {
        return  `<div class="col-sm-6">
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
}

module.exports = Manager
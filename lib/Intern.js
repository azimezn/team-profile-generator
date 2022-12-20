const Manager = require("./Manager");

class Intern extends Manager {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
}

module.exports = Intern


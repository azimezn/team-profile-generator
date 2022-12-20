const Manager = require("./Manager");

class Engineer extends Manager {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
}

module.exports = Engineer
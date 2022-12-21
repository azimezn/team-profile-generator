class Employee {
    // assign arguments
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // I don't need these because I did it a different way, but I kept them because it was in the instructions
    getName() {
        return this.name;
    }

    getID() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee
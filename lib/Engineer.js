// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Includes the Employee Class
const Employee = require("./Employee");

class Engineer {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;

    }
}

module.exports = Engineer;
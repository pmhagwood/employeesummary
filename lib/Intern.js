// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Includes the Employee Class
const Employee = require("./Employee");

class Intern {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;

    }
}

module.exports = Intern;
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Includes the Employee Class
const Employee = require("./Employee");

class Manager {
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;

    }
}

module.exports = Manager;
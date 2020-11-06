const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Prompt = require("inquirer/lib/prompts/base");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// array of questions for user
const teamMembers = [
    // manager
    // engineer
    // intern
];

function addMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "Which type of member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "No new team members"
            ]
        }
    ])
    .then(answer => {
        if(answer.type === "Engineer"){
            createEngineer();
        } else if (answer.type === "Intern"){
            createIntern();
        } else {
            // ????
        }
    })
}

function createManager(){
    inquirer.prompt([
        // Questions go here
        {
            type: "input",
            name: "name",
            message: "Please enter Manager's name"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter Manager's ID"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter Manager's email"
        },
        {
            type: "input",
            name: "office",
            message: "Please enter Manager's office number."
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.office));
        addMember();
    })
    .catch(error => {
        if(error.isTtyError){
            // Prompt couldn't be rendered
        } else {
            // something else went wrong
        }
    })
} 

function createEngineer () {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter Engineer's name."
        },
        {
            type:"input",
            name: "id",
            message: "Please enter Engineer's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter Engineer's email"
        },
        {
            type: "input",
            name: "github",
            message: "Please enter Engineer's github ID"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
        teamMembers.push(engineer);
        addMember();
    })
}

function createIntern () {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter Intern's Name."
        },
        {
            type:"input",
            name: "id",
            message: "Please enter Intern's ID"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter Intern's email"
        },
        {
            type: "input",
            name: "education",
            message: "Please enter Intern's College or School"
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.education);
        teamMembers.push(engineer);
        addMember();
    })
}

createManager();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

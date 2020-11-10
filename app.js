const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// array of questions for user
// Create an array to store all the team members the user creates. 
const teamMembers = [
    // manager gets stored ?
    // engineer gets stored
    // intern gets stored
];

// The manager is the first one to start the team, so start with the manager.
function createManager(){
    inquirer.prompt([
        // set up the manager by asking questions
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
        // Then we create a new constant of Manager and call the Manager class passing the answers.
        const manager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.office));
        // Then we start adding team members
        teamMembers.push(manager);
        addMember();
    })
} 

// The prompt asks to start creating a team and asks which team member you would like to add. 
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
            const htmlCard = render(teamMembers)
            fs.writeFile(outputPath, htmlCard, function(error){
                if (error) throw error;
                console.log('success');
            })
            // If they don't want any new team members we probably need to create the HTML page with the team. I have no idea how.
        }
    })
}

// Create an engineer
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
        // create a new const of engineer and use the Engineer class
        const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
        // add the new engineer into the array
        teamMembers.push(engineer);
        // go back and ask if they want new team members
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
            name: "school",
            message: "Please enter Intern's College or School"
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
        teamMembers.push(intern);
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

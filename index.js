const inquirer = require('inquirer');
const fs = require('fs')

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const { allowedNodeEnvironmentFlags } = require('process');

const employees = [];

// console.log(fs);
// console.log(inquirer);

// console.log(Manager.test);
// console.log(Intern.test);
// console.log(Engineer.test);

function buildRoster() {
    buildHTML();
    addRole();
}

function addRole() {
    inquirer.prompt([{
        message: "Enter team member's name.",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role.",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role"
    },
    {
        message: "Enter team member's employee ID number.",
        name: "id"
    },
    {
        message: "Enter team member's email address.",
        name: "email"
    }])
        .then(function ({ name, role, id, email }) {
            let roleData = "";
            if (role === "Engineer") {
                roleData = "GitHub username";
            } else if (role === "Intern") {
                roleData = "School name";
            } else {
                roleData = "Office number";
            }
            inquirer.prompt([{
                message: `Enter team member's ${roleData}`,
                name: "roleData"
            },
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                    "Yes",
                    "No"
                ],
                name: "moreMembers"
            }
            ])

        })

}
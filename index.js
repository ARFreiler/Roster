const inquirer = require('inquirer');
const fs = require('fs')

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const employees = [];

// console.log(fs);
// console.log(inquirer);

// console.log(Manager.test);
// console.log(Intern.test);
// console.log(Engineer.test);

function buildRoster() {
    openHTML();
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
                .then(function ({ roleData, moreMembers }) {
                    let newMember;
                    if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, roleData);
                    } else if (role === "Intern") {
                        newMember = new Intern(name, id, email, roleData);
                    } else {
                        newMember = new Manager(name, id, email, roleData);
                    }
                    employees.push(newMember);
                    addHTML(newMember)
                        .then(function () {
                            if (moreMembers === "Yes") {
                                addRole();
                            } else {
                                finishHTML();
                            }
                        });
                });
        });

}

function openHTML() {
    const htmlHead = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/42289e799c.js"
          crossorigin="anonymous"
        ></script>
        <link rel="stylesheet" href="stylesheet.css" />
        <title>Roster</title>
      </head>
      <body>
        <header>
          <h1>Team Roster</h1>
        </header>`;
    fs.writeFile("./src/template.html", htmlHead, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}
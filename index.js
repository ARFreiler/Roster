const inquirer = require('inquirer');
const fs = require('fs')

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');

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

// console.log(buildRoster());

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
        roleData = "GitHub username.";
      } else if (role === "Intern") {
        roleData = "School name.";
      } else {
        roleData = "Office number.";
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
        </header>
        <div class="container">
      <div class="row" id="top">`;
  fs.writeFile("./src/template.html", htmlHead, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("start");
}

function addHTML(member) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    let data = "";
    if (role === "Engineer") {
      const gitHub = member.getGitHub();
      data = `<div class="member">
            <div class="member-head">
              <h2>${name}</h2>
              <h3><i class="fas fa-hard-hat"></i> Engineer</h3>
            </div>
            <div class="member-body">
              <ul>
                <li>ID: ${id}</li>
                <li>Email: <br><a href="mailto:${email}">${email}</a></li>
                <li>GitHub:<a href="https://github.com/${gitHub}">${gitHub}</a></li>
              </ul>
            </div>
          </div>`;
    } else if (role === "Intern") {
      const school = member.getSchool();
      data = `<div class="member">
            <div class="member-head">
              <h2>${name}</h2>
              <h3><i class="fas fa-user-graduate"></i> Intern</h3>
            </div>
            <div class="member-body">
              <ul>
                <li>ID: ${id}</li>
                <li>Email: <br><a href="mailto:${email}">${email}</a></li>
                <li>School: ${school}</li>
              </ul>
            </div>
          </div>`;
    } else {
      const officeNumber = member.getOfficeNumber();
      data = `<div class="member">
            <div class="member-head">
              <h2>${name}</h2>
              <h3><i class="fas fa-mug-hot"></i> Manager</h3>
            </div>
            <div class="member-body">
              <ul>
                <li>ID: ${id}</li>
                <li>Email:<br><a href="mailto:${email}">${email}</a></li>
                <li>Office Number: ${officeNumber}</li>
              </ul>
            </div>
          </div>`;
    }
    console.log("Adding team member");
    fs.appendFile("./src/template.html", data, function (err) {
      if (err) {
        return reject(err);
      };
      return resolve();
    });
  });
}

function finishHTML() {
  const html = ` </div>
    </body>
  </html>`;

  fs.appendFile("./src/template.html", html, function (err) {
    if (err) {
      console.log(err);
    };
  });
  console.log("end");
}

buildRoster();

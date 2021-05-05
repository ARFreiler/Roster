const inquirer = require('inquirer');
const fs = require('fs')

const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

console.log(fs);
console.log(inquirer);

console.log(manager.test);
console.log(intern.test);
console.log(engineer.test);
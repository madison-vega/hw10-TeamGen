// dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./develop/lib/employee');
const Engineer = require('./develop/lib/engineer');
const Manager = require('./develop/lib/manager');
const Intern = require('./develop/lib/intern');

// need for fs function fs doc
const outputDirectory;
const outputPath;

// arrays for questions
const employeeQ = [
    {
        name: 'id',
        type: 'input',
        message: 'What is your employee ID?'
    },
    {
        name: 'name',
        type: 'input',
        message: 'What is your name?'

    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'

    },
    {
        name: 'role',
        type: 'checkbox',
        message: 'What is your role?',
        choices: ['Manager', 'Engineer', 'Intern']
    }

];

const engineerQ = [
    {
        name: 'github',
        type: 'input',
        message: 'What is your Github username?'

    }

];

const managerQ = [
    {
        name: 'office',
        type: 'input',
        message: 'What is your office number?'
    }

];

const internQ = [
    {
        name: 'school',
        type: 'input',
        message: 'What school do you attend?'
    }

];

const addQ = [
    {
        name : 'add',
        type: 'confirm',
        message: 'Would you like to add another team member?'

    }
];



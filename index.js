// dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Employee = require('./develop/lib/employee');
const Engineer = require('./develop/lib/engineer');
const Manager = require('./develop/lib/manager');
const Intern = require('./develop/lib/intern');



// need for fs function fs doc
// const outputDirectory;
// const outputPath;

// empty arrays to push info
let teamInfo = [];

// arrays for questions

const managerQ = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the managers name?'

    },
    {
        name: 'id',
        type: 'input',
        message: 'What is their employee ID?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their email address?'

    },
    {
        name: 'office',
        type: 'input',
        message: 'What is your office number?'
    }

];

const engineerQ = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the managers name?'

    },
    {
        name: 'id',
        type: 'input',
        message: 'What is their employee ID?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their email address?'

    },
    {
      
        name: 'github',
        type: 'input',
        message: 'What is their Github username?'

    },
    
];


const internQ = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the managers name?'

    },
    {
        name: 'id',
        type: 'input',
        message: 'What is their employee ID?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their email address?'

    },
    {
        name: 'school',
        type: 'input',
        message: 'What school do you attend?'
    }

];

const addQ = [
    {
        name: 'add',
        type: 'list',
        message: 'Would you like to add another team member?',
        choices: ['Engineer', 'Intern', 'Done']

    }
];


const initApp = () => {
    inquirer
    .prompt(managerQ)
    .then(data => {
        const manager = new Manager(
            data.name,
            data.id,
            data.email,
            data.office
        );
        teamInfo.push(manager);
        addTeamMem();
    })
}


const addTeamMem = () => {
    inquirer
    .prompt(addQ)
    .then(data => {
        switch (data.add) {
            case 'Engineer':
                addEngineer();
                break;
            
            case 'Intern':
                addIntern();
                break;
            
            // case 'Done':
            //     // renderHTML();
                
        }
    })
}

const addEngineer = () => {
    inquirer
    .prompt(engineerQ)
    .then(data => {
        const engineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.github
        );
        teamInfo.push(engineer);
        addTeamMem();
    });
};

const addIntern = () => {
    inquirer
    .prompt(internQ)
    .then(data => {
        const intern = new Intern(
            data.name,
            data.id,
            data.email,
            data.school
        );
        teamInfo.push(intern);
        addTeamMem();
    });
};



initApp();
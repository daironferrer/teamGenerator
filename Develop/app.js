const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = []

const employee = [
    {
        type: 'list',
        message: 'What type of employee are you adding?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern', 'Finished']
    },
];

const manager = [
    {
        type: 'input',
        message: 'What is the managers name?',
        name: 'name'
    },

    {
        type: 'input',
        message: 'What is the managers ID?',
        name: 'id'
    },

    {
        type: 'input',
        message: 'What is the managers email?',
        name: 'email'
    },

    {
        type: 'input',
        message: 'What is the managers office number?',
        name: 'officeNum'
    },
];

const engineer = [
    {
        type: 'input',
        message: 'What is the engineers name?',
        name: 'name'
    },

    {
        type: 'input',
        message: 'What is the engineers ID?',
        name: 'id'
    },

    {
        type: 'input',
        message: 'What is the engineers github?',
        name: 'github'
    },

    {
        type: 'input',
        message: 'What is the engineers email?',
        name: 'email'
    },
];

const intern = [
    {
        type: 'input',
        message: 'What is the interns name?',
        name: 'name'
    },

    {
        type: 'input',
        message: 'What is the interns ID?',
        name: 'id'
    },

    {
        type: 'input',
        message: 'What is the interns email?',
        name: 'email'
    },

    {
        type: 'input',
        message: 'What school did your intern attend?',
        name: 'school'
    },
];

addEmployee = () => {
    inquirer.prompt(employee).then(function (data) {
        if (data.role === 'Manager') {
            addManager();
        }
        if (data.role === 'Engineer') {
            addEngineer();
        }
        if (data.role === 'Intern') {
            addIntern();
        } 
        else {
            finishAdding();
        }
    });
};

addManager = () => {
    inquirer.prompt(manager).then(function (data) {
        const manager = new Manager (data.name, data.id, data.email, data.officeNum);
        employees.push(manager);
        addEmployee();
    });
};

addEngineer = () => {
    inquirer.prompt(engineer).then(function (data) {
        const engineer = new Engineer (data.name, data.id, data.email, data.github);
        employees.push(engineer);
        addEmployee();
    });
};

addIntern = () => {
    inquirer.prompt(intern).then(function (data) {
        const intern = new Intern (data.name, data.id, data.email, data.school);
        employees.push(intern);
        addEmployee();
    });
};

finishAdding = () => {
    writeToFile
   };


writeToFile = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
      }
      fs.writeFileSync(outputPath, render(employees), "utf-8");
    };


init = () => {
    addEmployee();
};

init();
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "What is the project title?",
    "Provide a project description:",
    "Provide installation instructions:",
    "Provide usage information:",
    "Describe the contribution guidelines:",
    "Provice testing instrucitons:",
    "Which license will your project use?",
    "What is your GitHub Username?",
    "What is your email?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    // generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .createPromptModule([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'install',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'contribute',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'testing',
                message: questions[5],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[6],
                choices: [
                    'MIT License',
                    'GNU General Public License v2.0',
                    'Mozilla Public License 2.0',
                    'None',
                ],
                // choices: [
                //     {
                //         key: 't',
                //         name: 'MIT License',
                //         value: 'MIT License',
                //     },
                //     {
                //         key: 'g',
                //         name: 'GNU General Public License v2.0',
                //         value: 'GNU General Public License v2.0',
                //     },
                //     {
                //         key: 'm',
                //         name: 'Mozilla Public License 2.0',
                //         value: 'Mozilla Public License 2.0',
                //     },
                // ],
            },
            {
                type: 'input',
                name: 'github',
                message: questions[7],
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
            },
        ])
        .then((answers) => {
            writeToFile('README.md',answers);
        })
}

// Function call to initialize app
init();

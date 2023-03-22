// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
function writeToFile(fileName, data) {}

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
                type: 'expand',
                name: 'license',
                message: questions[6],
                choices: "",
            }
        ])
}

// Function call to initialize app
init();

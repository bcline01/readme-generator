// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer'; 



// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
    {
        type: 'input',
        message: "Provide a short description of your project",
        name: 'description',
    },
    {
        type: 'checkbox',
        message: "what would you like to include in the table of contents?",
        name: 'contents',
        choices: ['installation','lisence','credits']
    },
    {
        type: 'input',
        message: "what are the steps to install your project",
        name: 'install',
    },
    {
        type: 'input',
        message: "List any credits for this project",
        name: 'credits',
    },
    {
        type: 'list',
        message: "what lisence would you like to use for your project?",
        name: 'lisence',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE']
    }
])
.then((answers) => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

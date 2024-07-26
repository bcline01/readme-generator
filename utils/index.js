// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer'; 
import generateMarkdown from './generateMarkdown.js';




// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: "What is the Title of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Provide a short description of your project.",
        name: 'description',
    },
    {
        type: 'input',
        message: "What are the steps to install your project?",
        name: 'install',
    },
    {
        type: 'input',
        message: "Please provide instructions and examples for use.",
        name: 'usage',
    },
    {
        type: 'input',
        message: "List any credits for this project.",
        name: 'credits',
    },
    {
        type: 'list',
        message: "What lisence would you like to use for your project?",
        name: 'lisence',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'NONE']
    },
    {
        type: 'input',
        message: "Badges that you would like to include.",
        name: 'badges',
    },
    {
        type: 'input',
        message: "List any features used in your project.",
        name: 'features',
    },
    {
        type: 'input',
        message: "Please list any contributors. (Github usernames)",
        name: 'contribute',
    },
    {
        type: 'input',
        message: "How to test the project.",
        name: 'test',
    },
    {
        type: 'input',
        message: "Frequently Asked Questions.",
        name: 'questions',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Success!');
        }
    });
}

// initailizing app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Creating Professional README.md File");
        const markdown = generateMarkdown(answers); 
        writeToFile('../dist/README.md', markdown); 
    });
}

// Function call to initialize app
init();


//Required Modules
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateJS = require('./utils/generate');


//arr questions for user
const questions = [{
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'what command should be run to run test?'
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repo?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your Email Address?'
    },

    {
        type: 'list',
        name: 'liscense',
        message: 'What license does your projec have?',
        choices: ['Apache 2.0', 'MIT', 'none']
    },


]

function createfile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}







function init() {
    console.log("working");
    inquirer.prompt(questions)
        .then((response) => {
            console.log('questions were prompt');
            createfile('README.md', generateJS({...response }))
        })
}





init();
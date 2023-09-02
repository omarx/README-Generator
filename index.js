const inquirer = require('inquirer');
const generateMarkdown=require('./utils/generateMarkdown')
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        name:"title",
        message:"Enter a title for your project:",
        type:"input"
    },{
    name:"description",
    message:"Enter a description for your readme:",
    type:"input"
},{
    name:"installation",
    message:"Enter installation instructions:",
    type:"input"
},
{
    name:"usage",
    message:"Enter usage information:",
    type:"input"
},
{
    name:"contribution",
    message:`Enter contribution guidelines:`,
    type:"input"
},{
    name:"test",
    message:"Enter test instructions:",
    type:"input"
},{
    name:"license",
    message:"What license does your project use",
    type:"list",
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],

    }, {
        name: "email",
        message:"Please enter your email",
        type:"input"
    },{
        name: "github",
        message:"Please enter your github repo",
        type:"input"
    }

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers=>{
        writeToFile('README.md',generateMarkdown(answers))
    }).catch(error=>{
        console.error(error);
    })
}

// Function call to initialize app
init();

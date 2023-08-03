const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    name:"description",
    message:"Enter a description for your readme",
    type:"input"
},{
    name:"installation",
    message:"Enter installation instructions",
    type:"input"
},
{
    name:"usage",
    message:"Enter usage information",
    type:"input"
},
{
    name:"contribution",
    message:`Enter contribution guidelines`,
    type:"input"
},{
    name:"test",
    message:"Enter test instructions",
    type:"input"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers=>{
        console.log(answers);
    }).catch(error=>{
        console.error(error);
    })
}

// Function call to initialize app
init();

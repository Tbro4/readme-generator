// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's title?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of your project.",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license does your project use?",
    choices: [
      "MIT",
      "Apache 2.0",
      "GPLv2",
      "GPLv3",
      "BSD 3-clause",
      "LGPLv3",
      "AGPLv3",
    ],
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using this repo?",
  },
  {
    type: "input",
    name: "installation",
    message: "What commands should be run for dependencies(installation)?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What commands should be run for tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "contribute",
    message: "How does a user contribute to this project?",
  },
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
// init function both runs and creates readme
function init() {
  //returns a promise object
  inquirer.prompt(questions).then((data) => {
    fs.writeFile(
      "./generatedREADME/README.md",
      generateMarkdown(data),
      (err) => {
        err ? console.log(err) : console.log("File was written!");
      }
    );
  });
}
// Function call to initialize app
init();

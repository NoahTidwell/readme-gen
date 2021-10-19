//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./src/template.js')

//inquirer to generate questions
const userQuestions = [
    // Project name
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title to continue!');
                return false;
            }
        }
    },
    // Description of project
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description of your project!');
                return false;
            }
        }
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation info to continue!');
                return false;
            }
        }
    },
    // Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide information on how to use project!');
                return false;
            }
        }
    },
    // Contribution Guidlines
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to this project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    // Test Instructions 
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please describe how to test this project!');
                return false;
            }
        }
    },
    // License Options
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Please select one or more license(s) for your project (Required)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('Please pick a license for the project!');
                return false;
            }
        }
    },
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    },
];

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
        console.log('Successfully Transferred README Information!');
    });
};

const init = () => {
    inquirer.prompt(userQuestions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateReadme(userInput));
    });
};

init();

//node modules
const inquirer = require('inquirer');
const fs = require('fs');

//inquirer to generate questions
inquirer.prompt(
    [
        // Project Title
        {
            type: 'input',
            name: 'title',
            message: "What's the title of the project?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Need input to continue!'
                };
            }
        },
        // Installation
        {
            type: 'input',
            name: 'installation',
            message: "How do you install your app?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Need input to continue!'
                };
            }
        },
        // Instructions
        {
            type: 'input',
            name: 'instructions',
            message: "Instructions for the project?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Need input to continue!'
                };
            }
        },
        // Credits
        {
            type: 'input',
            name: 'credits',
            message: "Any credits?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Need input to continue!'
                };
            }
        },
        // Usage
        {
            type: 'input',
            name: 'usage',
            message: "How is the project used?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Need input to continue!'
                };
            }
        },
        // Licenses
        {
            type: 'list',
            name: 'licenses',
            message: "What license do you want to use?",
            choices: ['The MIT License', 'Apache License', 'The GPL License', 'GNU License', 'N/A'],
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Need input to continue!'
                };
            }
        },
        // Github Username
        {
            type: 'input',
            name: 'github',
            message: "What's your github username?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Need input to continue!'
                };
            }
        },
        // Email
        {
            type: 'input',
            name: 'email',
            message: "What's your email?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return 'Need input to continue!'
                };
            }
        }
    ]
).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    github,
    linkedin,
    email,
    usage,
    contributions
}) => {
    // Page Template
})
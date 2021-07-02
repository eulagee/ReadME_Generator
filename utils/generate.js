//Create a function that returns a license badge based on licensed badge based on which license is pass in
// if there is no license, return an empty string 
// Created a function to do exactly as asked, fo the badge and license link.

if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return '';
}


//function to generateJs for README

function generateJS(data) {
    return `
# ${data.title}

# ${data.email}

# ${data.github}

# ${data.contibutors}

# ${data.test}

## Questions
If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`


}

module.exports = generateJS;
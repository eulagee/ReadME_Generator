//Create a function that returns a license badge based on licensed badge based on which license is pass in.
// if there is no license, return an empty string 
// Created a function to do exactly as asked, fo the badge and license link.




//function to generateJs for README

function generateMarkdown(data) {
    return `
    
  ## Title ${data.title}

    [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)
  
    ${data.description}
  # Table of Contents

    * [Project Description](#project-description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Tests](#tests)
    * [License](#license)
    * [Contributions](#contributions)
    * [Questions](#questions)
    
  
  # Project Description
    
    
    
# Installation
    ${data.installation}

# Usage

${data.usage}

# Tests
    ${data.tests}

# License
    ${data.license}

# Contributions
    ${data.contributors}
    # Questions
    If you have any questions, please contact the project owner by clicking on the email listed below.  
    
    ![user image](${data.image})
    #### ${data.email !== null ? "[" + data.email + "](mailto:" + data.email + ")" : "This user's email is private."}
  `;
}

module.exports = generateMarkdown;
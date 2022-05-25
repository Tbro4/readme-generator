// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `## License Link `;
    //returns the actual link for the license
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License 
  This project is licensed with ${license}.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)

  - [Usage](#usage)

  - [License](#license)

  - [Contributing](#contributing)

  - [Tests](#tests)

  - [Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribute}

  ## Tests
  To run tests, run the following command:
  
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at [${
    data.email
  }](mailto:${data.email}). You can find more of my work at [github.com/${
    data.github
  }](github.com/${data.github})

`;
}

module.exports = generateMarkdown;

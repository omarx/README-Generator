// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license==="None" || license===null || license===" "){
        return ``;
    }else{
        return `\n* [License](#license)\n`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license==="None" || license===null || license===" "){
        return ``;
    }else{
        return `## License`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

# Description
${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
\`\`\`bash  
   ${data.installation}
 \`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contribution

${data.contribution}

## Tests

To run tests use the commands listed below:

\'\'\'
${data.test}
\'\'\'

## Questions

If you have any questions you can open an issue or reach out to me at ${
      data.email
  }. You can find all of my work at [${data.github}](https://github.com/${
      data.github
  }/).

`;
}

module.exports = generateMarkdown;

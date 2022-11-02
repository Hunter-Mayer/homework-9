// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`}
return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0/'
  } else if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT/'
  } else if (license === 'GPL') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html/'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license === 'None') {
//     return ''
//   } else {
//     return `##License: ${data.license}: ${renderLicenseLink(data.license)}`
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribute)
- [Tests](#tests)
- [License](#licenses)
- [Contact](#contact)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution:
  ${data.contribute}

  ## Tests:
  ${data.tests}

  ## License
  ${renderLicenseLink(data.license)}
   
  ## Contact
  Reach out at ${data.email}
  or 
  GitHub at [${data.githubuser}](https://github.com/${data.githubuser})
`;
}

module.exports = generateMarkdown;

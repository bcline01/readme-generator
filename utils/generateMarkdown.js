// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  const badgeUrls = {
    'MIT': 'https://img.shields.io/badge/license-MIT-green',
    'GPL-3.0': 'https://img.shields.io/badge/license-GPL%203.0-blue',
    'Apache-2.0': 'https://img.shields.io/badge/license-Apache%202.0-red',
  };

  return badgeUrls[license] || '';
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Function that returns the license section of the README

function renderLicenseSection(license) {}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Credits](#credits)
  5. [features](#features)
  6. [Contributors](#contribute)
  7. [Test](#test)
  8. [Contact](#contact)
  9. [License](#license)

  ## Installation
  ${data.install}
  

  ## Usage
  ${data.usage}


  ## Credits
  ${data.credits}
  
  ## Features
  ${data.features}

  ## Contributors (Github usernames)
  ${data.contribute}

  ## Test
  ${data.test}


  ## Contact  
  Github: https://github.com/${data.contact} 


  ## License

  ${data.license}
`;
}
//export module


export default generateMarkdown;

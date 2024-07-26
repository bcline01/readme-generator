// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.desc}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Credits](#credits)
  5. [Test](#test)
  6. [Contact](#contact)
  7. [License](#license)

  ## Installation
  ${data.install}
  

  ## Usage
  ${data.use}


  ## Credits
  ${data.credits}
  

  ## Test
  ${data.test}


  ## Contact
  Email: ${data.email}   
  Github: https://github.com/${data.github} 


  ## License
  ${data.license} 
`;
}
//export module


export default generateMarkdown;

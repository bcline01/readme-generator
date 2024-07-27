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

function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPL-3.0': 'https://opensource.org/licenses/GPL-3.0',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
  };

  return licenseLinks[license] || '';
}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

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
  8. [Questions](#questions)
  9. [License](#license)

  ## Installation
  ${data.install}
  

  ## Usage
  ${data.usage}


  ## Credits
  ${data.credits}
  
  ## Features
  ${data.features}

  ## Contributing (Github usernames)
  ${data.contribute}

  ## Tests
  ${data.test}


  ## Questions  
  If you have any questions, please contact me at:
  Github: ${data.github} 
  Email: ${data.email}

  ## License

[${data.license}](${renderLicenseLink(data.license)}) license is a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

## Badge
![${data.license}](${renderLicenseBadge(data.license)})


`





}
//export module


export default generateMarkdown;

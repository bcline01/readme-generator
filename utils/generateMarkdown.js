// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  const badgeUrls = {
    'MIT': 'https://img.shields.io/badge/license-MIT-green',
    'GPL-3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'APACHE-2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
  };

  return badgeUrls[license] || '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPL-3.0': 'https://opensource.org/licenses/GPL-3.0',
    'APACHE-2.0': 'https://opensource.org/licenses/Apache-2.0',
  };

  return licenseLinks[license] || '';
}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the **[${license}](${renderLicenseLink(license)})** lisence.
    <br>Please click the link about to learn more about this lisence.`;
  } else {
    return "";
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![${data.license}](${renderLicenseBadge(data.license)})
  ## Description
  ${data.description}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Credits](#credits)
  5. [License](#license)
  6. [features](#features)
  7. [Contributors](#contributors)
  8. [Tests](#tests)
  9. [Questions](#questions)

  ## Installation
  ${data.install}
  

  ## Usage
  ${data.usage}


  ## Credits
  ${data.credits}


  ## License
  ${renderLicenseSection(data.license)}

  
  ## Features
  ${data.features}


  ## Contributors
  ${data.contribute}


  ## Tests
  ${data.test}


  ## Questions
  If you have any questions, please contact me at:
  Github: [GitHub](https://github.com/${data.github})

  Email: [Email](mailto:${data.email})


`
}
//export module

export default generateMarkdown;
// Credit to: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba for these badge links
function renderLicenseBadge(license) {
  const links = [
    'https://img.shields.io/badge/License-MIT-yellow.svg',
    'https://img.shields.io/badge/License-GPL_v2-blue.svg',
    'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
  ]

  if (license === 'MIT License') {
    return links[0];
  } else if (license === 'GNU General Public License v2.0') {
    return links[1];
  } else if (license === 'Mozilla Public License 2.0') {
    return links[2];
  } else if (license === 'None') {
    return '';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = [
    'https://opensource.org/licenses/MIT',
    'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
    'https://opensource.org/licenses/MPL-2.0'
  ]
  
  if (license === 'MIT License') {
    return links[0];
  } else if (license === 'GNU General Public License v2.0') {
    return links[1];
  } else if (license === 'Mozilla Public License 2.0') {
    return links[2];
  } else if (license === 'None') {
    return '';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let boilerplate = 'Distributed under the '

  if (license === 'none') { //Defualt case is no license provided
    return '';
  } else {
    return `${boilerplate} [${license}](${renderLicenseLink(license)}) <br />
    ![${license}](${renderLicenseBadge(license)})
    `;
  }
}

/* Data attributes needed: title, description, install, usage, contribute, testing, license, github, email
 Fields needed in markdown: Title, Description, Table of contents, Installation, Usage, Credits, License,
 Contribute, Tests, Contact */
function generateMarkdown(data) {
  //Destructure data object
  const {title, description, installation, usage, contribute, tests, github, email, license} = data;
  //Create and return template literal
  return `# ${title}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  
  ## Description
  ${description}
  
  ## Installation
  Installations required: <br />
  ${installation}
  
  ## Usage
  ${usage}
  
  ## Tests
  Tests needed are: <br />
  ${tests}
  
  ## Contribute
  ${contribute}
  
  ## Contact me
  Here is my [GitHub Profile](${github}) <br />
  Or you can email me at ${email}
  - - -
  ## License
  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const links = [
    ''
  ]

  if (license === 'MIT License') {
    return links[0];
  } else if (license === 'GNU General Public License v2.0') {
    return links[0];
  } else if (license === 'Mozilla Public License 2.0') {
    return links[0];
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
    '',
    '',
    ''
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
  let boilerplate = 'Distributed under the'

  if (license === 'MIT License') {
    return;
  } else if (license === 'GNU General Public License v2.0') {
    return;
  } else if (license === 'Mozilla Public License 2.0') {
    return;
  } else if (license === 'None') {
    return '';
  } else {
    return '';
  }
}

/* Data attributes needed: title, description, install, usage, contribute, testing, license, github, email
 Fields needed in markdown: Title, Description, Table of contents, Installation, Usage, Credits, License,
 Contribute, Tests, Contact */
function generateMarkdown(data) {
  {title, description, installation, usage, contribute, tests, github, email}
  return `# ${data.title}
  # ${title}

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
  Here is my ![GitHub Profile](${github}) <br />
  Or you can email me at ${email}
  - - -
  ## License
  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;

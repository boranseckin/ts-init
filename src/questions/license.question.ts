import inquirer from 'inquirer';

import { Choice, Answer, LicenseValue } from '../models/choice';

async function licenseQuestion(): Promise<Answer> {
  const listOfLicenses: Choice[] = [
    { name: 'MIT License', value: LicenseValue.MIT },
    { name: 'ISC License', value: LicenseValue.ISC },
    { name: 'Apache 2.0 License', value: LicenseValue.APACHE },
    { name: 'BSD 2-Clause License', value: LicenseValue.BSD2 },
    { name: 'GPLv3 License', value: LicenseValue.GPL3 },
  ];

  return inquirer.prompt([{
    name: 'license',
    type: 'list',
    message: 'Which type of license do you want to use?',
    choices: listOfLicenses,
  }]);
}

export default licenseQuestion;

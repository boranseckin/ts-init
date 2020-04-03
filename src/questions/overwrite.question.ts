import inquirer from 'inquirer';

import { Answer } from '../models/choice';

async function overwriteQuestion(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: 'overwrite',
      type: 'confirm',
      message: 'Do you want to overwrite this folder?',
    },
  ]);
}

export default overwriteQuestion;

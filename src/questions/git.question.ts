import inquirer from 'inquirer';

import { Answer } from '../models/choice';

async function generalQuestion(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: 'git',
      type: 'confirm',
      message: 'Would you like to init a git repository?',
    },
  ]);
}

export default generalQuestion;

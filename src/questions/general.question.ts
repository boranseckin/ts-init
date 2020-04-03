import inquirer from 'inquirer';

import { Answer } from '../models/choice';

async function generalQuestion(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: 'What is the name of your project?',
      filter: (input: string) => new Promise((resolve) => {
        resolve(input.toLowerCase());
      }),
    },
    {
      name: 'author',
      type: 'input',
      message: 'Who is the author of this project?',
    },
    {
      name: 'email',
      type: 'input',
      message: 'What is the email address of the author?',
    },
  ]);
}

export default generalQuestion;

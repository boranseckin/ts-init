import inquirer from 'inquirer';

import { Answer } from '../models/choice';

async function confirmQuestion(answers: Answer): Promise<Answer> {
  return inquirer.prompt([
    {
      name: 'confirm',
      type: 'confirm',
      message: `Summary:\n\n${JSON.stringify(answers, null, 4)}\n\nIs this OK?`,
    },
  ]);
}

export default confirmQuestion;

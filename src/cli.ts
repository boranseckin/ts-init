import clear from 'clear';
import program from 'commander';
import _ from 'lodash';

import { Answer } from './models/choice';

import Checker from './utils/checker.utils';
import Logger from './utils/logger.utils';

import NPM from './actions/npm.action';
import Clear from './actions/clear.action';

import Files from './templates/files.template';
import Folders from './templates/folders.template';
import Package from './templates/package.template';
import Eslint from './templates/eslint.template';
import TSConfig from './templates/tsconfig.template';
import Readme from './templates/readme.template';
import GitIgnore from './templates/gitignore.template';

import generalQuestion from './questions/general.question';
import gitQuestion from './questions/git.question';
import licenseQuestion from './questions/license.question';
import confirmQuestion from './questions/confirm.question';
import overwriteQuestion from './questions/overwrite.question';
import Git from './actions/git.action';

export default class TSInit {
  static async runCLI(): Promise<void> {
    clear();

    // Greeting
    Logger.showTitle();

    // Argument parsing
    program
      .version('1.0.0')
      .description('Typescript Init New Project CLI')
      .option('-d, --debug', 'debug')
      .parse(process.argv);

    if (program.debug) console.log(program.opts());

    // Inquirer Questions
    const generalAnswer: Answer = await generalQuestion();
    const licenseAnswer: Answer = await licenseQuestion();
    const gitAnswer: Answer = await gitQuestion();

    let answers: Answer = _.merge(generalAnswer, licenseAnswer, gitAnswer);

    // Check if the folder already exists
    if (!Checker.startupCheck(answers.name)) {
      const overwriteAnswer: Answer = await overwriteQuestion();
      answers = _.merge(answers, overwriteAnswer);
      if (!overwriteAnswer.overwrite) {
        Logger.showError('Aborted');
        process.exit(0);
      }
      await Clear.clearFolder(answers.name);
    }

    const confirmAnswer: Answer = await confirmQuestion(answers);
    answers = _.merge(answers, confirmAnswer);
    if (!confirmAnswer.confirm) {
      Logger.showError('Aborted');
      process.exit(1);
    }

    const rootDir = `./${answers.name}`;

    // File System Creation
    Logger.showInfo('Creating root directory...');
    await Folders.generate(rootDir);
    process.chdir(rootDir);

    Logger.showInfo('Generating files...');
    await Package.generateFile(answers);
    await Eslint.generateFile();
    await TSConfig.generateFile();

    await Folders.generate('./dist');
    await Files.generate('./src/index.ts');

    // NPM Installation
    const packages: string[] = [];
    const devPackages: string[] = [
      'typescript',
      'ts-node',
      'nodemon',
      'eslint',
      'eslint-config-airbnb-base',
      'eslint-config-airbnb-typescript',
      'eslint-plugin-import',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
      '@types/node',
    ];

    await NPM.installPackages(packages);
    await NPM.installDevPackages(devPackages);

    // Git
    if (answers.git) {
      Logger.showInfo('Configuring git...');

      await Git.init();
      await Git.config(answers.author, answers.email);
      await GitIgnore.generateFile();
      await Readme.generateFile(answers.name);
      await Git.add('.');
      await Git.commit('Initial commit');
    }

    // End
    Logger.showEnd();
  }
}

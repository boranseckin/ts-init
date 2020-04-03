import DefaultTemplate from './default.template';

import { Answer } from '../models/choice';

class Package {
  static fileContent(answers: Answer): object {
    const data: object = {
      name: answers.name,
      version: '1.0.0',
      description: '',
      main: 'dist/index.js',
      keywords: [],
      author: answers.email ? `${answers.author} <${answers.email}>` : answers.author,
      license: answers.license,
      scripts: {
        lint: 'eslint . --ext .ts',
        start: 'node dist/index.js',
        'start:dev': 'node --inspect=5858 -r ts-node/register ./src/index.ts',
        'start:watch': 'nodemon',
        create: 'npm run build && npm start',
        build: 'tsc',
        pretest: 'npm run lint',
        test: 'echo \'Error: no test specified\' && exit 1',
        refresh: 'rm -rf ./node_modules ./package-lock.json && npm install',
        docs: 'typedoc -out docs ./src',
      },
      nodemonConfig: {
        ignore: [
          '**/*.test.ts',
          '**/*.spec.ts',
          '.git',
          'node_modules',
          'docs',
        ],
        watch: [
          'src',
        ],
        exec: 'npm run start:dev',
        ext: 'ts',
      },
    };

    return data;
  }

  static async generateFile(answers: Answer): Promise<void> {
    const path = './package.json';
    await DefaultTemplate.generateJSON(path, this.fileContent(answers));
  }
}

export default Package;

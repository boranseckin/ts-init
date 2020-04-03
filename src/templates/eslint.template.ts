import DefaultTemplate from './default.template';

class Eslint {
  static fileContent(): object {
    const data: object = {
      env: {
        es6: true,
        node: true,
        mongo: true,
      },
      extends: [
        'airbnb-base',
      ],
      ignorePatterns: [
        'node_modules',
        'dist',
        'bin',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
      ],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
      rules: {
        'no-console': [
          'off',
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
    };

    return data;
  }

  static async generateFile(): Promise<void> {
    const path = './.eslintrc.json';
    await DefaultTemplate.generateJSON(path, this.fileContent());
  }
}

export default Eslint;

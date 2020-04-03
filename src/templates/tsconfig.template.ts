import DefaultTemplate from './default.template';

class TSConfig {
  static fileContent(): object {
    const data: object = {
      compilerOptions: {
        target: 'es6',
        module: 'commonjs',
        sourceMap: true,
        outDir: './dist',
        rootDir: './src',
        resolveJsonModule: true,
        strict: true,
        noImplicitAny: true,
        alwaysStrict: true,
        baseUrl: './',
        paths: { '*': ['node_modules/*'] },
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true,
      },
      include: [
        'src/**/*',
      ],
      exclude: [
        'node_modules',
        '.vscode',
        'docs',
      ],
    };

    return data;
  }

  static async generateFile(): Promise<void> {
    const path = './tsconfig.json';
    await DefaultTemplate.generateJSON(path, this.fileContent());
  }
}

export default TSConfig;

import DefaultTemplate from './default.template';

class Files {
  static async generate(filePath: string, fileContent: string = ''): Promise<void> {
    await DefaultTemplate.generateFile(filePath, fileContent);
  }
}

export default Files;

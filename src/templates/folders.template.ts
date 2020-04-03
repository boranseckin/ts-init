import DefaultTemplate from './default.template';

class Folders {
  static async generate(folderPath: string): Promise<void> {
    await DefaultTemplate.generateFolder(folderPath);
  }
}

export default Folders;

import DefaultTemplate from './default.template';

class Readme {
  static fileContent(name: string): string {
    const data: string = `# ${name}`;
    return data;
  }

  static async generateFile(name: string): Promise<void> {
    const path = './README.md';
    await DefaultTemplate.generateFile(path, this.fileContent(name));
  }
}

export default Readme;

import fs from 'fs-extra';

import Logger from '../utils/logger.utils';

class DefaultTemplate {
  static async generateFile(filePath: string, fileContent: string): Promise<void> {
    Logger.showGenerate(filePath);

    await fs.ensureFile(filePath)
      .then(() => {
        fs.writeFileSync(filePath, fileContent);
        Logger.showCreate(filePath);
      })
      .catch((error) => {
        Logger.showError(error);
        process.exit(1);
      });
  }

  static async generateJSON(filePath: string, fileContent: object): Promise<void> {
    Logger.showGenerate(filePath);

    await fs.ensureFile(filePath)
      .then(() => {
        fs.writeJSONSync(filePath, fileContent, { spaces: 2 });
        Logger.showCreate(filePath);
      })
      .catch((error) => {
        Logger.showError(error);
        process.exit(1);
      });
  }

  static async generateFolder(folderPath: string): Promise<void> {
    Logger.showGenerate(folderPath);

    await fs.ensureDir(folderPath)
      .then(() => {
        Logger.showCreate(folderPath);
      })
      .catch((error) => {
        Logger.showError(error);
        process.exit(1);
      });
  }
}

export default DefaultTemplate;

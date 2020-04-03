import fs from 'fs-extra';

import Logger from '../utils/logger.utils';

class Clear {
  static async clearFolder(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      Logger.showClear(`./${name}`);

      fs.emptyDir(`./${name}`)
        .then(() => {
          Logger.showSuccess(`./${name} is cleared.`, true);
          resolve();
        })
        .catch((err) => {
          Logger.showError(err);
          reject();
        });
    });
  }
}

export default Clear;

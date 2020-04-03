import fs from 'fs-extra';

import Logger from './logger.utils';

class Checker {
  static checkExistence(path: string): boolean {
    return fs.existsSync(path);
  }

  static startupCheck(name: string): boolean {
    const isFolderExist = this.checkExistence(`./${name}`);

    if (isFolderExist) {
      Logger.showInfo(`A folder with the name ${name} is found in this directory.`);
      return false;
    }
    return true;
  }
}

export default Checker;

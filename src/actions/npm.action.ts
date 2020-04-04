import _ from 'lodash';
import { exec } from 'child_process';

import Logger from '../utils/logger.utils';

class NPM {
  static async installPackages(packages: string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      Logger.showInfo('Installing dependencies...');

      packages.forEach((pack: string) => {
        Logger.showInstall(pack);
      });

      Logger.npmOutputStart();

      const insPackages: string = _.join(packages, ' ');

      exec(`npm install --save ${insPackages}`, (error, stdout) => {
        if (error) {
          Logger.showError(error);
          reject();
        } else {
          console.log(stdout);

          Logger.npmOutputEnd();

          packages.forEach((pack: string) => {
            Logger.showSuccess(pack);
          });

          resolve();
        }
      });
    });
  }

  static async installDevPackages(packages: string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      Logger.showInfo('Installing dev dependencies...');

      packages.forEach((pack: string) => {
        Logger.showInstall(pack);
      });

      Logger.npmOutputStart();

      const insPackages: string = _.join(packages, ' ');

      exec(`npm install --save-dev ${insPackages}`, (error, stdout) => {
        if (error) {
          Logger.showError(error);
          reject();
        } else {
          console.log(stdout);

          Logger.npmOutputEnd();

          packages.forEach((pack: string) => {
            Logger.showSuccess(pack);
          });

          resolve();
        }
      });
    });
  }
}

export default NPM;

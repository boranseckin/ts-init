import npm from 'npm';

import Logger from '../utils/logger.utils';

class NPM {
  static loadNPM(callback: Function): void {
    npm.load({
      loglevel: 'silent',
    }, (loadError) => {
      if (loadError) {
        Logger.showError(loadError);
        process.exit(1);
      }
      npm.commands.set(['progress', 'false'], () => {
        callback(undefined);
      });
    });
  }

  static async installPackages(packages: string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      Logger.showInfo('Installing dependencies...');

      packages.forEach((pack: string) => {
        Logger.showInstall(pack);
      });

      Logger.npmOutputStart();

      this.loadNPM(() => {
        npm.config.set('save-dev', false);

        npm.config.save('./', () => {
          npm.commands.install([...packages], (installError) => {
            if (installError) {
              Logger.showError(installError);
              reject(installError);
            }

            Logger.npmOutputEnd();

            packages.forEach((pack: string) => {
              Logger.showSuccess(pack);
            });

            resolve();
          });
        });
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

      this.loadNPM(() => {
        npm.config.set('save-dev', true);

        npm.config.save('./', () => {
          npm.commands.install([...packages], (installError) => {
            if (installError) {
              Logger.showError(installError);
              reject(installError);
            }

            Logger.npmOutputEnd();

            packages.forEach((pack: string) => {
              Logger.showSuccess(pack);
            });

            resolve();
          });
        });
      });
    });
  }
}

export default NPM;

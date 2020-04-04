import { exec } from 'child_process';

import Logger from '../utils/logger.utils';

class Git {
  static async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      exec('git init', (error) => {
        if (error) {
          Logger.showError(error);
          reject();
        } else {
          resolve();
        }
      });
    });
  }

  static async add(files: string): Promise<void> {
    return new Promise((resolve, reject) => {
      exec(`git add ${files}`, (error) => {
        if (error) {
          Logger.showError(error);
          reject();
        } else {
          Logger.showSuccess('Files are added to tracking.');
          resolve();
        }
      });
    });
  }

  static async commit(name: string, email: string, message: string): Promise<void> {
    return new Promise((resolve, reject) => {
      exec(`git commit --author="${name} <${email}>" -m "${message}"`, (error) => {
        if (error) {
          Logger.showError(error);
          reject();
        } else {
          Logger.showSuccess('Files are commited.');
          resolve();
        }
      });
    });
  }
}

export default Git;

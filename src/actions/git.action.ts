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

  static async config(name: string, email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      exec(`git config user.email "${email}"`, (emailError) => {
        if (emailError) {
          Logger.showError(emailError);
          reject();
        } else {
          exec(`git config user.name "${name}"`, (nameError) => {
            if (nameError) {
              Logger.showError(nameError);
              reject();
            } else {
              Logger.showSuccess('User configurations are made.');
              resolve();
            }
          });
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

  static async commit(message: string): Promise<void> {
    return new Promise((resolve, reject) => {
      exec(`git commit -m "${message}"`, (error) => {
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

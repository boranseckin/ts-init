import chalk from 'chalk';
import figlet from 'figlet';

class Logger {
  static newLine = '\n';

  static showTitle(): void {
    console.log(chalk.yellow(figlet.textSync('TS-INIT', { horizontalLayout: 'full' })));
  }

  static showEnd(): void {
    console.log(this.newLine);
    console.log(chalk.yellow('Workspace is ready...'));
  }

  static showError(message: string | Error): void {
    console.log(chalk.red('ERROR: ') + message);
  }

  static showSuccess(message: string, newLine: boolean = false): void {
    if (newLine) {
      console.log(chalk.green('SUCCESS: ') + message + this.newLine);
    } else {
      console.log(chalk.green('SUCCESS: ') + message);
    }
  }

  static showInfo(message: string): void {
    console.log(this.newLine + chalk.blue('INFO: ') + message + this.newLine);
  }

  static showClear(fileName: string): void {
    console.log(`${this.newLine}${chalk.cyan('CLEARING:')} ${fileName}...`);
  }

  static showGenerate(fileName: string): void {
    console.log(`${chalk.cyan('GENERATING:')} ${fileName}...`);
  }

  static showInstall(packageName: string): void {
    console.log(chalk.cyan('INSTALLING: ') + packageName);
  }

  static showCreate(filePath: string): void {
    console.log(`${chalk.green('SUCCESS:')} ${filePath}`);
  }

  static npmOutputStart(): void {
    console.log(this.newLine + chalk.gray('------------ NPM Output ------------'));
  }

  static npmOutputEnd(): void {
    console.log(chalk.gray('------------------------------------') + this.newLine);
  }
}

export default Logger;

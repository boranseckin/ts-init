"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
class Logger {
    static showTitle() {
        console.log(chalk_1.default.yellow(figlet_1.default.textSync('TS-INIT', { horizontalLayout: 'full' })));
    }
    static showEnd() {
        console.log(this.newLine);
        console.log(chalk_1.default.yellow('Workspace is ready...'));
    }
    static showError(message) {
        console.log(chalk_1.default.red('ERROR: ') + message);
    }
    static showSuccess(message, newLine = false) {
        if (newLine) {
            console.log(chalk_1.default.green('SUCCESS: ') + message + this.newLine);
        }
        else {
            console.log(chalk_1.default.green('SUCCESS: ') + message);
        }
    }
    static showInfo(message) {
        console.log(this.newLine + chalk_1.default.blue('INFO: ') + message + this.newLine);
    }
    static showClear(fileName) {
        console.log(`${this.newLine}${chalk_1.default.cyan('CLEARING:')} ${fileName}...`);
    }
    static showGenerate(fileName) {
        console.log(`${chalk_1.default.cyan('GENERATING:')} ${fileName}...`);
    }
    static showInstall(packageName) {
        console.log(chalk_1.default.cyan('INSTALLING: ') + packageName);
    }
    static showCreate(filePath) {
        console.log(`${chalk_1.default.green('SUCCESS:')} ${filePath}`);
    }
    static npmOutputStart() {
        console.log(this.newLine + chalk_1.default.gray('------------ NPM Output ------------'));
    }
    static npmOutputEnd() {
        console.log(chalk_1.default.gray('------------------------------------') + this.newLine);
    }
}
Logger.newLine = '\n';
exports.default = Logger;
//# sourceMappingURL=logger.utils.js.map
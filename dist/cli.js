"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clear_1 = __importDefault(require("clear"));
const commander_1 = __importDefault(require("commander"));
const lodash_1 = __importDefault(require("lodash"));
const checker_utils_1 = __importDefault(require("./utils/checker.utils"));
const logger_utils_1 = __importDefault(require("./utils/logger.utils"));
const npm_action_1 = __importDefault(require("./actions/npm.action"));
const clear_action_1 = __importDefault(require("./actions/clear.action"));
const files_template_1 = __importDefault(require("./templates/files.template"));
const folders_template_1 = __importDefault(require("./templates/folders.template"));
const package_template_1 = __importDefault(require("./templates/package.template"));
const eslint_template_1 = __importDefault(require("./templates/eslint.template"));
const tsconfig_template_1 = __importDefault(require("./templates/tsconfig.template"));
const readme_template_1 = __importDefault(require("./templates/readme.template"));
const gitignore_template_1 = __importDefault(require("./templates/gitignore.template"));
const general_question_1 = __importDefault(require("./questions/general.question"));
const git_question_1 = __importDefault(require("./questions/git.question"));
const license_question_1 = __importDefault(require("./questions/license.question"));
const confirm_question_1 = __importDefault(require("./questions/confirm.question"));
const overwrite_question_1 = __importDefault(require("./questions/overwrite.question"));
const git_action_1 = __importDefault(require("./actions/git.action"));
class TSInit {
    static runCLI() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, clear_1.default)();
            // Greeting
            logger_utils_1.default.showTitle();
            // Argument parsing
            commander_1.default
                .version('1.0.0')
                .description('Typescript Init New Project CLI')
                .option('-d, --debug', 'debug')
                .parse(process.argv);
            if (commander_1.default.debug)
                console.log(commander_1.default.opts());
            // Inquirer Questions
            const generalAnswer = yield (0, general_question_1.default)();
            const licenseAnswer = yield (0, license_question_1.default)();
            const gitAnswer = yield (0, git_question_1.default)();
            let answers = lodash_1.default.merge(generalAnswer, licenseAnswer, gitAnswer);
            // Check if the folder already exists
            if (!checker_utils_1.default.startupCheck(answers.name)) {
                const overwriteAnswer = yield (0, overwrite_question_1.default)();
                answers = lodash_1.default.merge(answers, overwriteAnswer);
                if (!overwriteAnswer.overwrite) {
                    logger_utils_1.default.showError('Aborted');
                    process.exit(0);
                }
                yield clear_action_1.default.clearFolder(answers.name);
            }
            const confirmAnswer = yield (0, confirm_question_1.default)(answers);
            answers = lodash_1.default.merge(answers, confirmAnswer);
            if (!confirmAnswer.confirm) {
                logger_utils_1.default.showError('Aborted');
                process.exit(1);
            }
            const rootDir = `./${answers.name}`;
            // File System Creation
            logger_utils_1.default.showInfo('Creating root directory...');
            yield folders_template_1.default.generate(rootDir);
            process.chdir(rootDir);
            logger_utils_1.default.showInfo('Generating files...');
            yield package_template_1.default.generateFile(answers);
            yield eslint_template_1.default.generateFile();
            yield tsconfig_template_1.default.generateFile();
            yield folders_template_1.default.generate('./dist');
            yield files_template_1.default.generate('./src/index.ts');
            // NPM Installation
            const packages = [];
            const devPackages = [
                'typescript',
                'ts-node',
                'nodemon',
                'eslint',
                'eslint-config-airbnb-base',
                'eslint-config-airbnb-typescript',
                'eslint-plugin-import',
                '@typescript-eslint/eslint-plugin',
                '@typescript-eslint/parser',
                '@types/node',
            ];
            yield npm_action_1.default.installPackages(packages);
            yield npm_action_1.default.installDevPackages(devPackages);
            // Git
            if (answers.git) {
                logger_utils_1.default.showInfo('Configuring git...');
                yield git_action_1.default.init();
                yield git_action_1.default.config(answers.author, answers.email);
                yield gitignore_template_1.default.generateFile();
                yield readme_template_1.default.generateFile(answers.name);
                yield git_action_1.default.add('.');
                yield git_action_1.default.commit('Initial commit');
            }
            // End
            logger_utils_1.default.showEnd();
        });
    }
}
exports.default = TSInit;
//# sourceMappingURL=cli.js.map
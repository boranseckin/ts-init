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
const lodash_1 = __importDefault(require("lodash"));
const child_process_1 = require("child_process");
const logger_utils_1 = __importDefault(require("../utils/logger.utils"));
class NPM {
    static installPackages(packages) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                logger_utils_1.default.showInfo('Installing dependencies...');
                packages.forEach((pack) => {
                    logger_utils_1.default.showInstall(pack);
                });
                logger_utils_1.default.npmOutputStart();
                const insPackages = lodash_1.default.join(packages, ' ');
                child_process_1.exec(`npm install --save ${insPackages}`, (error, stdout) => {
                    if (error) {
                        logger_utils_1.default.showError(error);
                        reject();
                    }
                    else {
                        console.log(stdout);
                        logger_utils_1.default.npmOutputEnd();
                        packages.forEach((pack) => {
                            logger_utils_1.default.showSuccess(pack);
                        });
                        resolve();
                    }
                });
            });
        });
    }
    static installDevPackages(packages) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                logger_utils_1.default.showInfo('Installing dev dependencies...');
                packages.forEach((pack) => {
                    logger_utils_1.default.showInstall(pack);
                });
                logger_utils_1.default.npmOutputStart();
                const insPackages = lodash_1.default.join(packages, ' ');
                child_process_1.exec(`npm install --save-dev ${insPackages}`, (error, stdout) => {
                    if (error) {
                        logger_utils_1.default.showError(error);
                        reject();
                    }
                    else {
                        console.log(stdout);
                        logger_utils_1.default.npmOutputEnd();
                        packages.forEach((pack) => {
                            logger_utils_1.default.showSuccess(pack);
                        });
                        resolve();
                    }
                });
            });
        });
    }
}
exports.default = NPM;
//# sourceMappingURL=npm.action.js.map
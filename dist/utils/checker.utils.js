"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const logger_utils_1 = __importDefault(require("./logger.utils"));
class Checker {
    static checkExistence(path) {
        return fs_extra_1.default.existsSync(path);
    }
    static startupCheck(name) {
        const isFolderExist = this.checkExistence(`./${name}`);
        if (isFolderExist) {
            logger_utils_1.default.showInfo(`A folder with the name ${name} is found in this directory.`);
            return false;
        }
        return true;
    }
}
exports.default = Checker;
//# sourceMappingURL=checker.utils.js.map
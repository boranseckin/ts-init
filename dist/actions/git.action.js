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
const child_process_1 = require("child_process");
const logger_utils_1 = __importDefault(require("../utils/logger.utils"));
class Git {
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                child_process_1.exec('git init', (error) => {
                    if (error) {
                        logger_utils_1.default.showError(error);
                        reject();
                    }
                    else {
                        resolve();
                    }
                });
            });
        });
    }
    static add(files) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                child_process_1.exec(`git add ${files}`, (error) => {
                    if (error) {
                        logger_utils_1.default.showError(error);
                        reject();
                    }
                    else {
                        logger_utils_1.default.showSuccess('Files are added to tracking.');
                        resolve();
                    }
                });
            });
        });
    }
    static commit(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                child_process_1.exec(`git commit -m '${message}'`, (error) => {
                    if (error) {
                        logger_utils_1.default.showError(error);
                        reject();
                    }
                    else {
                        logger_utils_1.default.showSuccess('Files are commited.');
                        resolve();
                    }
                });
            });
        });
    }
}
exports.default = Git;
//# sourceMappingURL=git.action.js.map
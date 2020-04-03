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
const fs_extra_1 = __importDefault(require("fs-extra"));
const logger_utils_1 = __importDefault(require("../utils/logger.utils"));
class DefaultTemplate {
    static generateFile(filePath, fileContent) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_utils_1.default.showGenerate(filePath);
            yield fs_extra_1.default.ensureFile(filePath)
                .then(() => {
                fs_extra_1.default.writeFileSync(filePath, fileContent);
                logger_utils_1.default.showCreate(filePath);
            })
                .catch((error) => {
                logger_utils_1.default.showError(error);
                process.exit(1);
            });
        });
    }
    static generateJSON(filePath, fileContent) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_utils_1.default.showGenerate(filePath);
            yield fs_extra_1.default.ensureFile(filePath)
                .then(() => {
                fs_extra_1.default.writeJSONSync(filePath, fileContent, { spaces: 2 });
                logger_utils_1.default.showCreate(filePath);
            })
                .catch((error) => {
                logger_utils_1.default.showError(error);
                process.exit(1);
            });
        });
    }
    static generateFolder(folderPath) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_utils_1.default.showGenerate(folderPath);
            yield fs_extra_1.default.ensureDir(folderPath)
                .then(() => {
                logger_utils_1.default.showCreate(folderPath);
            })
                .catch((error) => {
                logger_utils_1.default.showError(error);
                process.exit(1);
            });
        });
    }
}
exports.default = DefaultTemplate;
//# sourceMappingURL=default.template.js.map
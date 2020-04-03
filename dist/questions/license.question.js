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
const inquirer_1 = __importDefault(require("inquirer"));
const choice_1 = require("../models/choice");
function licenseQuestion() {
    return __awaiter(this, void 0, void 0, function* () {
        const listOfLicenses = [
            { name: 'MIT License', value: choice_1.LicenseValue.MIT },
            { name: 'ISC License', value: choice_1.LicenseValue.ISC },
            { name: 'Apache 2.0 License', value: choice_1.LicenseValue.APACHE },
            { name: 'BSD 2-Clause License', value: choice_1.LicenseValue.BSD2 },
            { name: 'GPLv3 License', value: choice_1.LicenseValue.GPL3 },
        ];
        return inquirer_1.default.prompt([{
                name: 'license',
                type: 'list',
                message: 'Which type of license do you want to use?',
                choices: listOfLicenses,
            }]);
    });
}
exports.default = licenseQuestion;
//# sourceMappingURL=license.question.js.map
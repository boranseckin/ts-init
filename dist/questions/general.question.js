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
function generalQuestion() {
    return __awaiter(this, void 0, void 0, function* () {
        return inquirer_1.default.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'What is the name of your project?',
                filter: (input) => new Promise((resolve) => {
                    resolve(input.toLowerCase());
                }),
            },
            {
                name: 'author',
                type: 'input',
                message: 'Who is the author of this project?',
            },
            {
                name: 'email',
                type: 'input',
                message: 'What is the email address of the author?',
            },
        ]);
    });
}
exports.default = generalQuestion;
//# sourceMappingURL=general.question.js.map
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
const default_template_1 = __importDefault(require("./default.template"));
class Package {
    static fileContent(answers) {
        const data = {
            name: answers.name,
            version: '1.0.0',
            description: '',
            main: 'dist/index.js',
            keywords: [],
            author: answers.email ? `${answers.author} <${answers.email}>` : answers.author,
            license: answers.license,
            scripts: {
                lint: 'eslint . --ext .ts',
                start: 'node dist/index.js',
                'start:dev': 'node --inspect=5858 -r ts-node/register ./src/index.ts',
                'start:watch': 'nodemon',
                build: 'tsc',
                prepublishOnly: 'npm run build',
                pretest: 'npm run lint',
                test: 'echo \'Error: no test specified\' && exit 1',
                refresh: 'rm -rf ./node_modules ./package-lock.json && npm install',
                docs: 'typedoc -out docs ./src',
            },
            nodemonConfig: {
                ignore: [
                    '**/*.test.ts',
                    '**/*.spec.ts',
                    '.git',
                    'node_modules',
                    'docs',
                ],
                watch: [
                    'src',
                ],
                exec: 'npm run start:dev',
                ext: 'ts',
            },
        };
        return data;
    }
    static generateFile(answers) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = './package.json';
            yield default_template_1.default.generateJSON(path, this.fileContent(answers));
        });
    }
}
exports.default = Package;
//# sourceMappingURL=package.template.js.map
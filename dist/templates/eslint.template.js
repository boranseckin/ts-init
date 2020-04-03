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
class Eslint {
    static fileContent() {
        const data = {
            env: {
                es6: true,
                node: true,
                mongo: true,
            },
            extends: [
                'airbnb-base',
            ],
            ignorePatterns: [
                'node_modules',
                'dist',
                'bin',
            ],
            globals: {
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
            },
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: 'module',
                project: './tsconfig.json',
            },
            plugins: [
                '@typescript-eslint',
            ],
            settings: {
                'import/resolver': {
                    node: {
                        extensions: ['.js', '.jsx', '.ts', '.tsx'],
                    },
                },
            },
            rules: {
                'no-console': [
                    'off',
                ],
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    { argsIgnorePattern: '^_' },
                ],
                'import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        js: 'never',
                        jsx: 'never',
                        ts: 'never',
                        tsx: 'never',
                    },
                ],
            },
        };
        return data;
    }
    static generateFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = './.eslintrc.json';
            yield default_template_1.default.generateJSON(path, this.fileContent());
        });
    }
}
exports.default = Eslint;
//# sourceMappingURL=eslint.template.js.map
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
class TSConfig {
    static fileContent() {
        const data = {
            compilerOptions: {
                target: 'es6',
                module: 'commonjs',
                sourceMap: true,
                outDir: './dist',
                rootDir: './src',
                resolveJsonModule: true,
                declaration: true,
                strict: true,
                noImplicitAny: true,
                alwaysStrict: true,
                baseUrl: './',
                paths: { '*': ['node_modules/*'] },
                esModuleInterop: true,
                forceConsistentCasingInFileNames: true,
            },
            include: [
                'src/**/*',
            ],
            exclude: [
                'node_modules',
                'dist',
                '.vscode',
                'docs',
            ],
        };
        return data;
    }
    static generateFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = './tsconfig.json';
            yield default_template_1.default.generateJSON(path, this.fileContent());
        });
    }
}
exports.default = TSConfig;
//# sourceMappingURL=tsconfig.template.js.map
declare class Logger {
    static newLine: string;
    static showTitle(): void;
    static showEnd(): void;
    static showError(message: string | Error): void;
    static showSuccess(message: string, newLine?: boolean): void;
    static showInfo(message: string): void;
    static showClear(fileName: string): void;
    static showGenerate(fileName: string): void;
    static showInstall(packageName: string): void;
    static showCreate(filePath: string): void;
    static npmOutputStart(): void;
    static npmOutputEnd(): void;
}
export default Logger;

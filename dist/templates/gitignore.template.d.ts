declare class GitIgnore {
    static fileContent(): string;
    static generateFile(): Promise<void>;
}
export default GitIgnore;

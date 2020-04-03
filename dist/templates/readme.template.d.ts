declare class Readme {
    static fileContent(name: string): string;
    static generateFile(name: string): Promise<void>;
}
export default Readme;

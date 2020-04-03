declare class DefaultTemplate {
    static generateFile(filePath: string, fileContent: string): Promise<void>;
    static generateJSON(filePath: string, fileContent: object): Promise<void>;
    static generateFolder(folderPath: string): Promise<void>;
}
export default DefaultTemplate;

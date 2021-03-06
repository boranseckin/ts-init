declare class Git {
    static init(): Promise<void>;
    static config(name: string, email: string): Promise<void>;
    static add(files: string): Promise<void>;
    static commit(message: string): Promise<void>;
}
export default Git;

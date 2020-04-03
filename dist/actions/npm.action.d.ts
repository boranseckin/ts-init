declare class NPM {
    static loadNPM(callback: Function): void;
    static installPackages(packages: string[]): Promise<any>;
    static installDevPackages(packages: string[]): Promise<any>;
}
export default NPM;

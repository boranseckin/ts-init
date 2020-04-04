declare class NPM {
    static installPackages(packages: string[]): Promise<any>;
    static installDevPackages(packages: string[]): Promise<any>;
}
export default NPM;

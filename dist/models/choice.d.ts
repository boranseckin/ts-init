export interface Answer {
    name: string;
    author: string;
    email: string;
    git: boolean;
    license: LicenseValue;
    confirm: boolean;
    overwrite: boolean;
}
export interface Choice {
    name: string;
    value: LicenseValue;
}
export declare enum LicenseValue {
    MIT = "MIT",
    APACHE = "APACHE",
    ISC = "ISC",
    BSD2 = "BSD2",
    GPL3 = "GPL3"
}

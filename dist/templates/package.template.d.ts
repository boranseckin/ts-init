import { Answer } from '../models/choice';
declare class Package {
    static fileContent(answers: Answer): object;
    static generateFile(answers: Answer): Promise<void>;
}
export default Package;

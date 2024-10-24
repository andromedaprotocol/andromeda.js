import { getCurrentPackage } from './utils/npm';
import packageJson from '../package.json';

describe("getPackageVersion", () => {
    it("should return the correct version of the current package", () => {
        const packageInfo = getCurrentPackage();
        expect(packageInfo.version).toBeDefined();
        expect(typeof packageInfo.version).toBe("string");
        expect(packageInfo.version).toBe(packageJson.version);
    });
});

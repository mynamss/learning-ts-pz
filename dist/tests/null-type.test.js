import { sayHi } from "../src/null-type";
describe("Null & Undefined", () => {
    it("should support null type", () => {
        // memanggil sayHi dan isi parameter
        sayHi("Tekotok");
        // memanggil sayHi tanpa isi parameter
        const name = undefined;
        sayHi(name);
        sayHi(null);
    });
});

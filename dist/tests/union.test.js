"use strict";
describe('Union Type', () => {
    it('should support some data type', () => {
        let active = "Right";
        active = 1;
        active = true;
        console.info(active);
    });
    it('should support with method', () => {
        function process(value) {
            if (typeof value == 'string') {
                return value.toUpperCase();
            }
            else if (typeof value == 'number') {
                return value + 5;
            }
            else {
                return !value;
            }
        }
        expect(process("Mamang")).toBe("MAMANG");
        expect(process(100)).toBe(105);
        expect(process(true)).toBe(false);
    });
});

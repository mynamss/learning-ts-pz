import { sayHello } from "../src/say-hello";

describe('sayHello', () => {
    it('should return Hello Ali', () => {
        expect(sayHello('Ali')).toBe('Hello Ali')
    });
})
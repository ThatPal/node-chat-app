const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('return false for non string values', () => {
        let res = isRealString(2345);
        expect(res).toBe(false);
    });

    it('return false for all space string', () => {
        let res = isRealString('      ');
        expect(res).toBe(false);
    });

    it('return true for a valid string', () => {
        let res = isRealString('   A string   ');
        expect(res).toBe(true);
    });
});
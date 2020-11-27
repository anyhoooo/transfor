'use strict';
const expect = require('chai').expect;
const checkPhone = require('../lib/transfor.cjs.js').checkPhone;
// import checkPhone from '../src/check/checkPhone'

describe('checkPhone function return true', () => {
    it('完整国内号码', () => {
        const result = checkPhone('+86-15268580000');
        expect(result).to.equal(true);
    });
    it('缩略国内号码', () => {
        const result = checkPhone('8615268580000');
        expect(result).to.equal(true);
    });
    it('默认国内号码', () => {
        const result = checkPhone('15268580000');
        expect(result).to.equal(true);
    });
    it('香港号码', () => {
        const result = checkPhone('+852-56891234');
        expect(result).to.equal(true);
    });
    it('迪拜号码', () => {
        const result = checkPhone('+971-111111');
        expect(result).to.equal(true);
    });
});

describe('checkPhone function return false', () => {
    it('国内号码没有前面的加号', () => {
        const result = checkPhone('86-15268580000');
        expect(result).to.equal(false);
    });
    it('国内号码中间加空格', () => {
        const result = checkPhone('+86 15268580000');
        expect(result).to.equal(false);
    });
    it('国内号码错误', () => {
        const result1 = checkPhone('25268580000');
        const result2 = checkPhone('1526858000');
        expect(result1 || result2).to.equal(false);
    });
    it('国外号码没有加号和横杠', () => {
        const result1 = checkPhone('85256891234');
        const result2 = checkPhone('971000000');
        expect(result1 || result2).to.equal(false);
    });
    it('香港号码错误', () => {
        const result1 = checkPhone('+852-46891234');
        const result2 = checkPhone('+852-5689123');
        const result3 = checkPhone('+852-656891232');
        expect(result1 || result2 || result3).to.equal(false);
    });
    it('迪拜号码位数错误', () => {
        const result1 = checkPhone('+971-1111112222223');
        const result2 = checkPhone('+971-00000');
        expect(result1 || result2).to.equal(false);
    });
});
'use strict';
const expect = require('chai').expect;
const getSemesterName = require('../../lib/transfor.cjs.js').getSemesterName;



describe('getSemesterName isCN is True', () => {
    beforeEach(() => {
        global.store = {
            getters: {
                isCN: true
            }
        }
    })
    it('获取中文学期', function () {

        const result = getSemesterName({
            year: 2010,
            semester: 1
        })
        expect(result).to.equal('2010-2011学年 第1学期');
    });
});

describe('getSemesterName isCN is False', () => {
    beforeEach(() => {
        global.store = {
            getters: {
                isCN: false
            }
        }
    })
    it('获取英文学期', () => {
        const result = getSemesterName({
            year: 2010,
            semester: 1
        });
        expect(result).to.equal('Semester 1, 2010-2011');
    });
});
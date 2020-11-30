'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 校验国内，香港，迪拜电话号码
 * @param {string} [phone='']
 * @returns {boolean} Returns true or false.
 * @example checkPhone('+86-15268580000')
 */
var checkPhone = function checkPhone(phone) {
  var reg = /^(((\+(86)\-)|(0|86|17951))?(1[3-9])[0-9]{9})$|^(\+852\-(5|6|8|9)[0-9]{7})$|^(\+971\-\d{6,12})$/;
  return reg.test(phone);
};

/**
 * 国际标准的银行卡号（储蓄卡和信用卡），注意：不包括各个银行的企业账户
 * @param {string} [str='']
 * @returns {boolean} Returns true or false.
 * @example checkBankCard('123456')
 */
var checkBankCard = function checkBankCard(str) {
  var reg = /^([45][0-9]{11,15}|62[0-9]{14,17})$/;
  return reg.test(str);
};

/**
 * 转化时间为分钟
 * @param {string} [time='']
 * @returns {number} Returns number.
 * @example toMinutesNumber('+86-15268588172')
 */
// import moment from "moment";
var toMinutesNumber = function toMinutesNumber(time) {
  var res = moment(time).hours() * 60 + moment(time).minutes();
  return res;
};

/**
 * 返回后端传来的学期对象的name（中文版或英文版），不改变原对象
 * @param    {[type]}                 semester [description]
 * @param    {String}                 lang         "cn"|"en"
 * @return   {[type]}                         name
 *
 * @DateTime 2017-06-30T14:24:32+0800
 */
var getSemesterName = function getSemesterName(semester) {
  var isCN = store.getters.isCN;

  if (isCN) {
    //2018-2019学年 第1学期
    return semester.year + '-' + (semester.year + 1) + '学年 第' + semester.semester + '学期';
  } else {
    //Semester 2, 2018-2019
    return 'Semester ' + semester.semester + ', ' + semester.year + '-' + (semester.year + 1);
  }
};

var transfor = {
  checkPhone: checkPhone,
  checkBankCard: checkBankCard,
  toMinutesNumber: toMinutesNumber,
  getSemesterName: getSemesterName
};

exports.checkBankCard = checkBankCard;
exports.checkPhone = checkPhone;
exports.default = transfor;
exports.getSemesterName = getSemesterName;
exports.toMinutesNumber = toMinutesNumber;

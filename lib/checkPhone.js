/**
 * 校验国内，香港，迪拜电话号码
 * @param {string} [phone='']
 * @returns {boolean} Returns true or false.
 * @example checkPhone('+86-15268588172')
 */
const checkPhone = (phone) => {
  let reg = /^(((\+(86)\-)|(0|86|17951))?(1[3-9])[0-9]{9})$|^(\+852\-(5|6|8|9)[0-9]{7})$|^(\+971\-\d{6,12})$/;
  return reg.test(phone);
};

export default checkPhone;

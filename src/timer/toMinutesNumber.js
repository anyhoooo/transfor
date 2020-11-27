/**
 * 转化时间为分钟
 * @param {string} [time='']
 * @returns {number} Returns number.
 * @example toMinutesNumber('+86-15268588172')
 */
// import moment from "moment";
const toMinutesNumber = (time) => {
    let res = moment(time).hours() * 60 + moment(time).minutes();
    return res;
};

export default toMinutesNumber;
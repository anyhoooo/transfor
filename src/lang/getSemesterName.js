/**
 * 返回后端传来的学期对象的name（中文版或英文版），不改变原对象
 * @param    {[type]}                 semester [description]
 * @param    {String}                 lang         "cn"|"en"
 * @return   {[type]}                         name
 *
 * @DateTime 2017-06-30T14:24:32+0800
 */
const getSemesterName = (semester) => {
    const isCN = store.getters.isCN
    if (isCN) {
        //2018-2019学年 第1学期
        return semester.year + '-' + (semester.year + 1) + '学年 第' + semester.semester + '学期'
    } else {
        //Semester 2, 2018-2019
        return 'Semester ' + semester.semester + ', ' + semester.year + '-' + (semester.year + 1)
    }
};

export default getSemesterName;
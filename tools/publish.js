const path = require('path')
const fs = require('fs')
const os = require('os')
const rootPath = path.resolve(__dirname, '../')
const fromPath = rootPath + '/src'

const toPath = rootPath + '/lib'

initFolder(toPath);

let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
folderList.forEach(item => {

    var sstats = fs.statSync(path.resolve(fromPath, item));

    if (sstats && sstats.isDirectory()) {
        //如果是文件夹
        let subFolder = fs.readdirSync(path.resolve(fromPath, item))
        subFolder.forEach(funName => {
            cloneFile(path.resolve(fromPath + '/' + item, funName), path.resolve(toPath, funName));
        })
    }
})
cloneFile(path.resolve(rootPath, 'package-prod.json'), path.resolve(toPath, 'package.json'));
cloneFile(path.resolve(rootPath, 'README.md'), path.resolve(toPath, 'README.md'));
console.log('复制成功！！！')
/**
 * 清空目录（如果没有目录，则创建）
 */
function initFolder(path) {
    if (fs.existsSync(path)) {
        console.log("find lib dir.");
        var files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (!fs.statSync(curPath).isDirectory()) {
                // delete file
                fs.unlinkSync(curPath);
            }
        });
    } else {
        fs.mkdirSync(path);
        console.log("create lib dir success.");
    }
};

function cloneFile(src, dst) {
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(dst);
    rs.on('data', function (chunk) {
        if (ws.write(chunk) === false) {
            rs.pause();
        }
    });
    rs.on('end', function () {
        ws.end();
    });
    ws.on('drain', function () {
        rs.resume();
    });
}
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

// 显示（打印出）输出的文件size
import filesize from 'rollup-plugin-filesize';

let jsConfig = {
    input: 'src/transfor.js',
    output: [{
        name: 'transfor',
        file: 'lib/transfor.es.js',
        format: 'es'
    }, {
        name: 'transfor.js',
        file: 'lib/transfor.cjs.js',
        format: 'cjs'
    }],
    plugins: [
        resolve(),
        json(),
        babel(),
        commonjs({
            include: /node_modules/
        }),
        filesize()
    ],
    //排除第三方依赖
    external: ["moment"]
};


// export default [config];
export default [jsConfig];
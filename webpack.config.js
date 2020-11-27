const path = require('path');
module.exports = {
    resolve: {
        extensions: ['.ts'],
    },
    entry: {
        transfor: "./src/transfor.ts",
    },
    output: {
        filename: '[name].js', // 生成的fiename需要与package.json中的main一致
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: 'commonjs',
    },
    externals: {

        moment: 'moment',

    },
    module: {
        rules: [{
            test: /\.ts?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    configFile: path.resolve(__dirname, './tsconfig.json'),
                },
            }, ],
            exclude: /node_modules/,
        }, ],
    },
    mode: "development",
    optimization: {
        minimize: false
    }
};
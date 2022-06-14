
const path = require('path');
module.exports = {

    // 모듈을 만들 파일
    entry:{
        index : './src/main/resources/static/js/index.js'
    },

    // 저장 위치 및 파일명
    output: {
        path: path.resolve(__dirname, 'src/main/resources/static/dist'),
        filename: '[name].js',
        // 전역객채로 지정
        library: 'common',
        libraryTarget: "umd"
    },

    // webpack 로더 설정 추가
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
};

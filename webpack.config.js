// node js 환경에서 실행됨
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
 

module.exports = {
    resolve : {
        extensions : ['.vue', '.js'],
        alias : {
            '~' : path.resolve(__dirname, 'src') // 경로 별칭 사용하면 특정 파일에 연관되지 않음
        }
    },
    entry : './src/main.js',
    output : { // file name은 생략하면 자동으로 main.js 로 생성됨
        path : path.resolve(__dirname, 'dist'),
        publicPath : '/',
        // 옵션이 동작을 하고 나서 최종 결과물
        // 따라서 entry를 제외한 나머지는 항상 절대경로로 사용해야 함
        clean : true
    },
    module : {
        rules : [
            {
                test : /\.vue$/,
                use : 'vue-loader'
            },
            {
                test : /\.s?css$/,
                use : [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : 'babel-loader'
            }
        ],
    },
    plugins : [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template : './src/index.html'
        }),
        new CopyPlugin({
            patterns : [
                {from : 'static'}
            ]
        })

    ],
    devServer : {
        historyApiFallback : true
    }



}
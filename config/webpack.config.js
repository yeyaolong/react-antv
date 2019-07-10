const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
let NODE_ENV = process.env.NODE_ENV
let devTool = undefined

switch (NODE_ENV) {
    case 'development':
        devTool = 'source-map'
        break
    case 'prod':
        devTool = 'eval'
        break
    default:
        detTool = undefined
        break
}

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: devTool,
    devServer: {
      host: 'localhost',
      port: 8080,
      compress: true,
      hot: true
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(less)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|gif|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            /**
                             *  打包路经
                             *  默认直接打包到dist目录下，
                             *  这种写法name: '[name].[hash:7].[ext]'也是直接打包到dist目录下
                             */
                            name: '[name].[hash:7].[ext]',
                            /**
                             *  浏览器请求的路径会变成
                             *  background: url("${publicPath}/${name}")
                             *  如果不填publicPath，那么就会变成
                             *  background: url("${name}")
                             */
                            publicPath: '/'
                        }
                    }
                ]
            },
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'public/view/index.html',
            template: 'public/view/index.html',
            chunk: 'app'
        })
    ]
}
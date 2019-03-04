
    var webpack = require('webpack');
    var path = require('path');
    module.exports = {
        resolve: {
            root: path.resolve('./src'),
        },
        entry: [
            //'react-hot-loader/patch', 
            './src/index.js' ,
            // './src/style.css'
        ],
    
        output: { //빌드 결과물을 생성하는 경로와 파일명세팅
            path: __dirname + '/public/',
            filename: 'bundle.js'
        },
    
        // 개발서버 설정입니다
        devServer: {
            hot: true,
            filename: 'bundle.js',
            publicPath: '/',
            historyApiFallback: true,
            contentBase: './public',
            /* 모든 요청을 프록시로 돌려서 express의 응답을 받아오며,
            bundle 파일의 경우엔 우선권을 가져서 devserver 의 스크립트를 사용하게 됩니다 */
            proxy: {
                "**": "http://localhost:3000" // express 서버주소
            },
            stats: {
              // 콘솔 로그를 최소화 합니다
              assets: false,
              colors: true,
              version: false,
              hash: false,
              timings: false,
              chunks: false,
              chunkModules: false
            }
        },
    
    
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ],
    
        module: {
            loaders: [
                {
                    // test: /\.js$/,
                    // loaders: ['react-hot-loader/webpack', 'babel?' + JSON.stringify({
                    //     cacheDirectory: true,
                    //     presets: ['es2015', 'react']
                    // })],
                    // exclude: /node_modules/,
                    test: /.js$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react'],
                        plugins: ["react-hot-loader/babel"]
                    }
                },
                {
                    test: /\.css$/,
                    loader: 'style!css-loader'
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    loader: require.resolve("url-loader"),
                },
                {
                    test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
                    loader: require.resolve("file-loader"),
    
                }
            ]
        }
    };
    

/*var webpack = require('webpack');
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: [
        './server/main.js',
        // 'webpack-dev-server/client?http://0.0.0.0:4000',
        // 'webpack/hot/only-dev-server'
    ],
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    target: 'node',
    node: {
        // Need this when working with express, otherwise the build fails
        // __dirname: false,   // if you don't put this is, __dirname
        // __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    devServer: {
        hot: true,
        port: 3000,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
        stats: {
          // Config for minimal console.log mess.
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new HtmlWebPackPlugin({
        //     template: "./index.html",
        //     filename: "./index.html",
        //     excludeChunks: [ 'server' ]
        // })
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            // favicon: "./public/favicon.ico"
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            }
        ]
    }
};
*/
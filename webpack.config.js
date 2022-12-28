const path = require("path");
const HtmlWebpack = require('html-webpack-plugin');


module.exports = {
    mode : 'development',
    entry : path.resolve(__dirname,'./src/index.js'),
    output : {
        path : path.resolve(__dirname,'build'),
        filename : 'bundle.js',
        clean : true
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /(node_modules)/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env']
                    }
                }
            },
            {
                test : /\.(css|sass|scss)$/i,
                use : ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test : /\.(jpg|jpeg|png|webp|gif|svg)$/,
                type : 'asset/resource'
            }
        ]
    },

    devServer : {
        static : {
            directory : path.resolve(__dirname,'build'),
        },
        port : 3000,
        open : true,
        hot : true

    },
    
    plugins : [new HtmlWebpack({
        title : 'Mini React',
        filename : 'index.html',
        template : path.resolve(__dirname,'public/index.html')
    })]
}
'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./app/app.js",
        vendor: ['angular']
    },
    output: {
        path: __dirname + "/wwwroot",
        filename: "bundle.js",
        chunkFilename: "[id].[hash].bundle.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'baggage?[file].tpl.html&[file].css'
            }
        ],
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.tpl.html$/,
                loader: 'html-loader!html-minify'
            }
        ]
    },
    plugins: [
        //new webpack.optimize.DedupePlugin(),
        //new webpack.optimize.UglifyJsPlugin(),        
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "app/index.html"
        })
    ],
    'html-minify-loader': {
        empty: true
    }
};
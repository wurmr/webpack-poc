'use strict';

var webpack = require('webpack');

module.exports = {
    entry: {
        app: "./app/app.js",
        vendor: ['angular']
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
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
    'html-minify-loader': {
        empty: true
    }
};
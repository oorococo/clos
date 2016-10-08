const path = require('path')
const webpack = require('webpack')

const src = path.resolve(__dirname, '../src')
const dst = path.resolve(__dirname, '../build')
const lib = path.resolve(__dirname, '../node_modules')

const config = require('../conf/config')

module.exports = {
    context: `${src}`,
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            `${src}/web/index.jsx`,
        ],
    },
    output: {
        path: `${dst}/`,
        publicPath: config.RESOURCES_PATH,
        filename: '[name].js',
    },
    // resolve: {
    //    extensions: ['.css', '.scss', '.js', '.jsx'],
    // },
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
                loader: "style!css?-minimize&sourceMap?{browsers:['last 2 versions', 'ie 9']}!sass?sourceMap",
            }, {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                include: src,
            }, {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|svg|woff|woff2)(\?[a-z0-9A-Z]*)?$/,
                include: [src, `${lib}/normalize.css`, `${lib}/font-awesome`],
                loader: 'url',
                query: {
                    name: '[hash].[ext]',
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
}

const path = require('path')

const src = path.resolve(__dirname, '../src')
const dst = path.resolve(__dirname, '../build')
const lib = path.resolve(__dirname, '../node_modules')

module.exports = {
    context: `${src}`,
    devtool: 'source-map',
    entry: {
        index: [`${src}/web/index.jsx`],
    },
    output: {
        path: `${dst}/`,
        publicPath: '/',
        filename: '[name].js',
    },
    target: 'node',
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
    ],
}

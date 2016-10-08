/* eslint global-require: 0 */

import express from 'express'
import webpack from 'webpack'

import config from '../../conf/config'

import controllers from './controllers'
import render from './render'

const app = express()

controllers(app)

if (process.env.NODE_ENV === 'development') {
    const devMiddleware = require('webpack-dev-middleware')
    const hotMiddleware = require('webpack-hot-middleware')
    const webpackConfig = require('../../dev/webpack.config.dev.js')

    const compiler = webpack(webpackConfig)

    app.use(devMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
    }))

    app.use(hotMiddleware(compiler))

    app.get('*', (req, res) => {
        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title></title>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
            </head>
            <body>
                <div id="root"></div>
                <script src="index.js"></script>
            </body>
            </html>
        `)
    })
} else if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        render(req, res)
    })
}

app.listen(config.PORT)

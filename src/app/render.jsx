import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import getRoutes from '../web/routes'
import { configureStore } from '../web/store'

const jsString = '<script src="/index.js"></script>'

export default (req, res) => {
    const state = {}
    const store = configureStore(state, undefined)
    const routes = getRoutes(store)
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            const reactRoot = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            )
            const finalState = store.getState()
            res.send(`
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <title></title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
                </head>
                <body>
                    <div id="root">${reactRoot}</div>
                    <script>window.__INITIAL_STATE__ = ${JSON.stringify(finalState)}</script>
                    ${jsString}
                </body>
                </html>
            `)
        } else {
            res.status(404).send('页面没找到哦亲!')
        }
    })
}

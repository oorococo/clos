import Root from './root.jsx'
import Home from './home'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default () => {
    const path = '/'
    return {
        path,
        component: Root,
        indexRoute: {
            component: Home,
        },
        getChildRoutes(location, cb) {
            require.ensure([], (require) => {
                cb(null, [
                    require('./index/routes').default(),
                    require('./portal/routes').default(),
                    require('./music/routes').default(),
                ])
            })
        },
    }
}

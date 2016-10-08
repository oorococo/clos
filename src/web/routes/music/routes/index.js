import Root from './root.jsx'
import Home from './home'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes() {
    return {
        path: 'music',
        component: Root,
        indexRoute: {
            component: Home,
        },
        getChildRoutes(location, cb) {
            require.ensure([], (require) => {
                cb(null, [
                    require('./genre').default(),
                    require('./artist').default(),
                    require('./album').default(),
                ])
            })
        },
    }
}

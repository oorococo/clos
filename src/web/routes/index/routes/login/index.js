if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes() {
    return {
        path: 'login',
        getComponents(location, cb) {
            require.ensure([], (require) => {
                const Login = require('./Login').default
                cb(null, Login)
            })
        }
    }
}


/* eslint no-param-reassign: 0, global-require: 0 */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerMiddleware, routerReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import rootStates from './reducers'

export const createReducer = asyncReducers => combineReducers({
    routing,
    form: formReducer,
    rootStates,
    ...asyncReducers,
})

export const configureStore = (initialState = {}, history) => {
    const store = createStore(createReducer(), initialState,
        compose(
            applyMiddleware(thunk, routerMiddleware(history))
        )
    )
    store.asyncReducers = {}
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers').default
            store.replaceReducer(nextReducer)
        })
    }
    return store
}

export const injectAsyncReducer = (store, name, asyncReducer) => {
    store.asyncReducers[name] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
}

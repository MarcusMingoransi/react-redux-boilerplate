// import { createStore } from 'redux'
// import Reducers from './reducers/index'

// export default createStore(Reducers)

import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers/index'

export const history = createBrowserHistory()

export default function configureStore(preloadedState: any) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )
  return store
}

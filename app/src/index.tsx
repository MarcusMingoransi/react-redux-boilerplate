import React from 'react'
import ReactDOM from 'react-dom'
import './styles/scss/index.scss'
// import Home from './Home';
import * as serviceWorker from './serviceWorker'
// import store from './store/index';
import { Provider } from 'react-redux'
import './i18n'

import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'
import routes from './routes'
const store = configureStore({})

// ReactDOM.render(
//   <Provider store={store}>
//       <Home />
//   </Provider>
// , document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {' '}
      {/* place ConnectedRouter under Provider */}
      {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

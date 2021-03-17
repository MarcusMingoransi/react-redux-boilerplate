import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { counterReducer } from './counterReducer'
import { themeReducer } from './themeReducer'

// export default combineReducers({
//     counterReducer
// })

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    counterReducer,
    themeReducer,
  })
export default createRootReducer

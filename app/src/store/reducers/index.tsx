import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'


import { counterReducer } from './counterReducer';

// export default combineReducers({
//     counterReducer
// })

const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    counterReducer
  })
  export default createRootReducer
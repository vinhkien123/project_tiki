import {combineReducers} from 'redux'
import productReducers from './productReducers'
const rootReducer = combineReducers({
    productReducers,

})
export default rootReducer;
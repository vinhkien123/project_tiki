import {combineReducers} from 'redux'
import productReducers from './productReducers'
import movieReducers from './movieReducers'
import userReducers from './user'
import shoppingcartReducers from './shopingcartReducers'
const rootReducer = combineReducers({
    productReducers,
    movieReducers,
    userReducers,
    shoppingcartReducers
})
export default rootReducer;
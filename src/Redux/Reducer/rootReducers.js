import {combineReducers} from 'redux'
import productReducers from './productReducers'
import movieReducers from './movieReducers'
import userReducers from './user'
const rootReducer = combineReducers({
    productReducers,
    movieReducers,
    userReducers
})
export default rootReducer;
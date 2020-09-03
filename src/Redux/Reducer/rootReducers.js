import {combineReducers} from 'redux'
import productReducers from './productReducers'
import movieReducers from './movieReducers'
const rootReducer = combineReducers({
    productReducers,
    movieReducers,
})
export default rootReducer;
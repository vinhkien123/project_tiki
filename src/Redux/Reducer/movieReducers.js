import {DANHSACHPHIM} from '../Action/type'


const initialState = {
    danhSachPhim : [],
}
const moviesReducers = (state = initialState , action)=>{
    switch(action.type){
        case DANHSACHPHIM:
            state.danhSachPhim = action.payload;
            return {...state}
        
        
        default : 
            return {...state}
    }
}
export default moviesReducers
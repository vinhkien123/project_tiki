import { LOGINFACEBOOK, THONGTINTAIKHOAN } from "../Action/type"

const initialState = {
    thongTinTaiKhoan : {},
    loginFacebook : {}
}
const userReducers = (state = initialState, action)=>{
    switch(action.type){
        case THONGTINTAIKHOAN:
            state.thongTinTaiKhoan = action.payload
            return{...state}
        case LOGINFACEBOOK: 
            state.loginFacebook = action.payload
            return {...state}
        default:
            return {...state}
    }
}
export default userReducers
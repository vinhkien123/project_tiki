import { DANHSACHSANPHAM, CHITIETSANPHAM, FLAG } from "../Action/type"

const initialState = {
    danhSachSanPham : [],
    chiTietSanPham : {},
    flag : false,

}
 const productReducers = (state = initialState,action)=>{
    switch(action.type){
        case DANHSACHSANPHAM:
            state.danhSachSanPham = action.payload
            return {...state}
        case FLAG: 
            state.flag = action.payload;
            return {...state}
        case CHITIETSANPHAM:
            state.chiTietSanPham = action.payload
            return {...state}
        default: 
            return {...state}
    }
}
export default productReducers
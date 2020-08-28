import { DANHSACHSANPHAM } from "../Action/type"

const initialState = {
    danhSachSanPham : [],
}
 const productReducers = (state = initialState,action)=>{
    switch(action.type){
        case DANHSACHSANPHAM:
            state.danhSachSanPham = action.payload
            return {...state}

        default: 
            return {...state}
    }
}
export default productReducers
import { DANHSACHGIOHANGTHEOUSER } from "../Action/type"

const initialState = {
    danhSachGioHangTheoUser : []


}
const shoppingcartReducers = (state = initialState, action) => {
    switch (action.type) {
        case DANHSACHGIOHANGTHEOUSER:
            console.log("testredux",action.payload);
            state.danhSachGioHangTheoUser = action.payload
            return {...state}
        default:
            return { ...state }
    }
}
export default shoppingcartReducers
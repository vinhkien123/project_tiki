import { DANHSACHSANPHAM, CHITIETSANPHAM, FLAG, SREACHPRICE, SREACHAZ, SREACHZA, KEYWORD, SREACHPRODUCTAPI, DANHMUCSANPHAM, SREACHTHEODANHMUC } from "../Action/type"

const initialState = {
    danhSachSanPham: [],
    chiTietSanPham: {},
    flag: false,
    sreachPrice: [],
    sreachAz: [],
    sreachZa: [],
    keyWord : "",
    sreachKeyWord : [],
    sreachProductApi : [],
    danhMucSanPham : [],
    idDanhMuc : "",


}
const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case SREACHPRODUCTAPI:
            state.sreachProductApi = action.payload
            return{...state}
        case KEYWORD:
            state.keyWord = action.payload
            console.log(state.danhSachSanPham,"Rsd");
            state.sreachKeyWord = state.danhSachSanPham.filter(
            item => item.Name?.toLowerCase().indexOf(state.keyWord) != -1
            )
            return {...state}
        case DANHSACHSANPHAM:
            state.danhSachSanPham = action.payload
            return { ...state }
        case FLAG:
            state.flag = action.payload;
            return { ...state }
        case CHITIETSANPHAM:
            state.chiTietSanPham = action.payload
            return { ...state }
        case SREACHPRICE:
            state.sreachPrice = action.payload
            state.sreachZa = []
            state.sreachAz = []
            return { ...state }
        case SREACHAZ:
            state.sreachAz = action.payload
            if (state.sreachZa.length >= 1) {
                state.sreachZa = []
            }
            return { ...state }
        case DANHMUCSANPHAM:
            state.danhMucSanPham = action.payload
            return {...state}
        case SREACHZA:
            state.sreachZa = action.payload
            if (state.sreachAz.length >= 1) {
                state.sreachAz = []
            }
            return { ...state }
        case SREACHTHEODANHMUC:
            state.idDanhMuc = action.payload
            return {...state}
        default:
            return { ...state }
    }
}
export default productReducers
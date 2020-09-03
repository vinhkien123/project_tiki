import { MoviesServices } from "../../Services";
import { DANHSACHPHIM } from "./type";
import { createAction } from ".";







export const DanhSachPhim = () => {
    return dispatch => {
        MoviesServices.danhSachPhim().then(res => {
            dispatch(createAction(DANHSACHPHIM, res.data))
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
}

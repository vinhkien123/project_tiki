import { MoviesServices } from "../../Services";
import { DANHSACHPHIM, CHITIETPHIM } from "./type";
import { createAction } from ".";
import Swal from 'sweetalert2';







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
export const ChiTietPhim = (id) => {
    return dispatch => {
        MoviesServices.chiTietPhim(id).then(res => {
            dispatch(createAction(CHITIETPHIM, res.data))
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
}
export const ThemPhim = (data)=>{
    MoviesServices.themSanPham(data).then(res=>{
        console.log(res.data);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thêm phim thành công ! ',
            showConfirmButton: false,
            timer: 800
        });
    }).catch(err => {
        console.log(err);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Thêm phim thất bại ! ',
            showConfirmButton: false,
            timer: 800
        });
    })
}

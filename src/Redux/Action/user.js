
import Swal from 'sweetalert2'
import { createAction } from '.';
import { UserServices } from '../../Services';
import { THONGTINTAIKHOAN } from './type';
export const DangNhap = (data) => {

    UserServices.dangNhap(data).then(res => {
        console.log(res.data);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Đăng nhập thành công ! ',
            showConfirmButton: false,
            timer: 1500
        });
        const user = JSON.stringify(res.data.data)
        localStorage.setItem("user", user)
        window.location.reload(false);





    }).catch(err => {
        console.log(err);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: "err.data.message",
            showConfirmButton: false,
            timer: 1200
        });
    })

}
export const ThongTinTaiKhoan = (token) => {
    return dispatch => {
        UserServices.thongTinTaiKhoan(token).then(res => {
            dispatch(createAction(THONGTINTAIKHOAN, res.data.data.user))

        }).catch(err => {

        })
    }
}
export const DangKy = (data) => {
    UserServices.dangKy(data).then(res => {
        console.log("thanhcong");
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Đăng ký thành công ! ',
            showConfirmButton: false,
            timer: 1500
        });


    }).catch(err => {
        console.log(err);
    })
}
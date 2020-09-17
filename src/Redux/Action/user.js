
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
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500
        });
        const user = JSON.stringify(res.data.data)
        console.log("user>", user);
        localStorage.setItem("user", user)
    }).catch(err => {
        console.log(err);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: err.response?.data.message,
            showConfirmButton: false,
            timer: 1200
        });
    })

}
export const CapNhatThongTin = (token, data, id) => {
    UserServices.capNhatThongTin(token, data, id).then(res => {
        console.log(res.data, "thanh cong");
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cập nhật thông tin thành công ! ',
            showConfirmButton: false,
            timer: 1500
        });
        localStorage.removeItem("user")
        window.location.reload(false);


    }).catch(err => {
        console.log(err);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1200
        });
    })

}
export const ThongTinTaiKhoan = (token) => {
    return dispatch => {
        UserServices.thongTinTaiKhoan(token).then(res => {
            dispatch(createAction(THONGTINTAIKHOAN, res.data.data.user))
            console.log("thongtinthanhcong");
        }).catch(err => {
            console.log("Errr",err);
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
        window.location.reload(false);


    }).catch(err => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1200
        });
    })
}
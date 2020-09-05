import { ProductsService } from "../../Services"
import { createAction } from "."
import { DANHSACHSANPHAM, CHITIETSANPHAM } from "./type"
import Swal from 'sweetalert2'


export const DanhSachSanPham = () => {
    return dispatch => {
        ProductsService.danhSachSanPham().then(res => {
            dispatch(createAction(DANHSACHSANPHAM, res.data))
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
}
// export const XoaSanPham = (id) => {
//         ProductsService.xoaSanPham(id).then(res => {
//             Swal.fire({
//                 position: 'center',
//                 icon: 'success',
//                 title: 'Xóa thành công ! ',
//                 showConfirmButton: false,
//                 timer: 1200
//             });
//         }).catch(err => {
//             console.log(err);
//             Swal.fire({
//                 position: 'center',
//                 icon: 'error',
//                 title: 'Xóa thất bại ! ',
//                 showConfirmButton: false,
//                 timer: 1200
//             });
//         })
// }
export const ThemSanPham = (data) => {
    
    ProductsService.themSanPham(data).then(res => {
        console.log(res.data);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thêm sản phẩm thành công ! ',
            showConfirmButton: false,
            timer: 800
        });

    }).catch(err => {
        console.log(err);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Thêm sản phẩm thất bại ! ',
            showConfirmButton: false,
            timer: 800
        });
    })

}
export const ChiTietSanPham = (id)=>{
    return dispatch =>{
        ProductsService.chiTietSanPham(id).then(res=>{
            dispatch(createAction(CHITIETSANPHAM,res.data))
        }).catch(err=>{
            console.log(err);
        })
    }
}
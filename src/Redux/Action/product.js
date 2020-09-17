import { ProductsService } from "../../Services"
import { createAction } from "."
import { DANHSACHSANPHAM, CHITIETSANPHAM, SREACHPRODUCTAPI, DANHMUCSANPHAM, SREACHTHEODANHMUC } from "./type"
import Swal from 'sweetalert2'


export const DanhSachSanPham = () => {
    return dispatch => {
        ProductsService.danhSachSanPham().then(res => {
            console.log(res.data);
            dispatch(createAction(DANHSACHSANPHAM, res.data.data.products))
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
        console.log(res.data, "thhêm thành công");
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thêm sản phẩm thành công ! ',
            showConfirmButton: false,
            timer: 800
        });

    }).catch(err => {
        console.log(err, "thhêm thất bại");
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 800
        });
    })

}
export const ChiTietSanPham = (id) => {
    return dispatch => {
        ProductsService.chiTietSanPham(id).then(res => {
           

            dispatch(createAction(CHITIETSANPHAM, res.data.data))
        }).catch(err => {
            console.log(err);
        })
    }
}
export const SreachSanPham = (keyWord) =>{
    return dispatch => {
        ProductsService.timKiemSanPham(keyWord).then(res =>{
            dispatch(createAction(SREACHPRODUCTAPI,res.data.data.products))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tìm kiếm sản phẩm thành công ! ',
                showConfirmButton: false,
                timer: 1200
            });
        }).catch(err =>{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: err.response.data.message,
                showConfirmButton: false,
                timer: 1200
            });
        })
    }
}
export const DanhMucSanPham = ()=>{
    return dispatch =>{
        ProductsService.danhMucSanPham().then(res=>{
            dispatch(createAction(DANHMUCSANPHAM,res.data.data))
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const DanhSachSanPhamTheoDanhMuc = (id)=>{
    return dispatch =>{
        ProductsService.danhSachSanPhamTheoDanhMuc(id).then(res=>{
            console.log("resdata",res.data);
            dispatch(createAction(SREACHTHEODANHMUC,res.data))
        }).catch(err=>{
            console.log(err);
        })
    }
}
import { createAction } from ".";
import { ShopingServices } from "../../Services";
import { DANHSACHGIOHANGTHEOUSER, DONHANG, QUANLYDONHANG } from "./type";






export const LayDanhSachGioHangUser = (id)=>{
    return dispatch =>{
        console.log("API giỏ hàng");
        ShopingServices.layDanhSachGioHangTheoUser(id).then(res=>{
            console.log("redux",res.data.data.ListProduct);
            dispatch(createAction(DANHSACHGIOHANGTHEOUSER,res.data.data))
        }).catch(err=>{
            console.log("kthanhcong");
            console.log("al",err);
        })
    }
}
export const QuanLyDonHang = (id)=>{
    return dispatch =>{
        ShopingServices.quanLyDonHang(id).then(res=>{
            console.log(res.data);

            dispatch(createAction(QUANLYDONHANG,res.data.data))
        }).catch(err=>{
            console.log(err);
        })
    }
}
export const DonHang = (url)=>{
    return dispatch =>{
        ShopingServices.donHang(url).then(res=>{
            console.log(res.data);

            dispatch(createAction(DONHANG,res.data.data))
        }).catch(err=>{
            console.log(err);
        })
    }
}
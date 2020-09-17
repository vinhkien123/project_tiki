import { createAction } from ".";
import { ShopingServices } from "../../Services";
import { DANHSACHGIOHANGTHEOUSER } from "./type";






export const LayDanhSachGioHangUser = (id)=>{
    return dispatch =>{
        console.log("API giỏ hàng");
        ShopingServices.layDanhSachGioHangTheoUser(id).then(res=>{
            console.log("redux",res.data.data.ListProduct);
            dispatch(createAction(DANHSACHGIOHANGTHEOUSER,res.data.data.ListProduct))
        }).catch(err=>{
            console.log("kthanhcong");
            console.log("al",err);
        })
    }
}
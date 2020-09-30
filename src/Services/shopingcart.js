import axios from 'axios';
// const APICor = `https://cors-anywhere.herokuapp.com/`
const APILink = `http://localhost:4000/`

///////////// localhost:4000 https://cors-anywhere.herokuapp.com/ https://marketplacedata.herokuapp.com/
class shoppingServices {
    themGioHang(data) {
        console.log("teaa",data);
        return axios({
            url: `${APILink}api/cart/add`,
            method: "POST",
            data,
            
        })
    }
    layDanhSachGioHangTheoUser(id) {
        return axios({
            url: `${APILink}api/cart?UserId=${id}`,
            method: "GET",
           
        })
    }
    xoaGioHang(data){
        console.log("du lieu",data);
        return axios({
            url : `${APILink}api/cart/delete`,
            method: "POST",
            data
        })
    }
    giamSoLuongGioHang(data){
        return axios({
            url :`${APILink}api/cart/delete-quantity`,
            method: "POST",
            data
        })
    }
    oderGioHang(data){
        return axios({
            url : `${APILink}api/order/create`,
            method: "POST",
            data
        })
    }
    quanLyDonHang(id){
        return axios({
            url : `${APILink}api/order/getOrderByUsers?UserId=${id}`,
            method: "GET",
        })
    }
    donHang(url){
        return axios({
            url:`${APILink}api/order/get/${url}`,
            method: "GET",
        })
    }
}
export default shoppingServices

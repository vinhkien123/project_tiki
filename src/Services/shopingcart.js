import axios from 'axios'
const APICor = `https://cors-anywhere.herokuapp.com/`
const APILink = `https://marketplacedata.herokuapp.com/`
class shoppingServices {
    themGioHang (data){
        return axios({
            url : `${APILink}api/cart/add`,
            method : "POST",
            data
        })
    }
    layDanhSachGioHang (){
        return axios({
            url : `${APILink}api/cart/get`,
            method: "GET"
        })
    }
}
export default shoppingServices

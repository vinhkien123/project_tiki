import axios from 'axios'
const APICor = `https://cors-anywhere.herokuapp.com/`
const APILink = `https://marketplacedata.herokuapp.com/`
class shoppingServices {
    themGioHang(data) {
        return axios({
            url: `${APICor}${APILink}api/cart/add`,
            method: "POST",
            data,
            
        })
    }
    layDanhSachGioHangTheoUser(id) {
        return axios({
            url: `${APICor}${APILink}api/cart?UserId=${id}`,
            method: "GET",
           
        })
    }
}
export default shoppingServices

import axios from 'axios'
const APICor = `https://cors-anywhere.herokuapp.com/`
const APILink = `http://localhost:4000/`

///////////// localhost:4000 https://cors-anywhere.herokuapp.com/ https://marketplacedata.herokuapp.com/
class shoppingServices {
    themGioHang(data) {
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
}
export default shoppingServices

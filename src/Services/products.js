import axios from 'axios'

class productsServices {
    danhSachSanPham (){
        return axios({
            url : `https://5f474cbc95646700168d9187.mockapi.io/danhSachSanPham`,
            method: `GET`,
        })
    }
    themSanPham (data){
        return axios({
            url : `https://5f474cbc95646700168d9187.mockapi.io/danhSachSanPham`,
            method : `POST`,
            data
        })
    }
    chiTietSanPham(id){
        return axios({
            url : `https://5f474cbc95646700168d9187.mockapi.io/danhSachSanPham/${id}`,
            method: `GET`,
        })
    }
    xoaSanPham (id){
        return axios({
            url :`https://5f474cbc95646700168d9187.mockapi.io/danhSachSanPham/${id}`,
            method : `DELETE`,
        })
    }
}
export default productsServices
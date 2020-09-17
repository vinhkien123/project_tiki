import axios from 'axios'
const APICor = `https://cors-anywhere.herokuapp.com/`
const APILink = `http://localhost:4000/`
class productsServices {

    danhSachSanPham() {
        return axios({
            url: `${APILink}api/product/list?limit=20&page=1`,
            method: `GET`,
            // headers: { 
            //     'x-apikey': '59a7ad19f5a9fa0808f11931',
            //     'Access-Control-Allow-Origin' : '*',
            //     'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            //   }
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    }
    themSanPham(data) {
        return axios({
            url: `${APILink}api/product`,
            method: `POST`,
            data,
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    }
    chiTietSanPham(id) {
        return axios({
            url: `${APILink}api/product?id=${id}`,
            method: `GET`,
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    }
    xoaSanPham(id) {
        return axios({
            url: `${APILink}api/product/delete/${id}`,
            method: `POST`,
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    }
    timKiemSanPham(tenSanPham) {
        return axios({
            url: `${APILink}api/product/search?search=${tenSanPham}`,
            method: `GET`,
            data: tenSanPham

        })
    }
    danhMucSanPham() {
        return axios({
            url: `${APILink}api/category/get`,
            method: `GET`,
        })
    }
    danhSachSanPhamTheoDanhMuc(id) {
        return axios({
            url: `${APILink}api/product/category/search?IdCategory=${id}`,
            method: `GET`,
            data: id
        })
    }

}
export default productsServices

// import axios from 'axios'
// const APICor = `https://cors-anywhere.herokuapp.com/`
// const APILink = `https://marketplacedata.herokuapp.com/`
// class productsServices {
//     danhSachSanPham (){
//         return axios({
//             url : `${APICor}${APILink}api/product/list?limit=20&page=1`,
//             method: `GET`,
//         })
//     }
//     themSanPham (data){
//         return axios({
//             url : `${APICor,APILink}api/product`,
//             method : `POST`,
//             data
//         })
//     }
//     chiTietSanPham(id){
//         return axios({
//             url : `${APICor,APILink}api/product?id=${id}`,
//             method: `GET`,
//         })
//     }
//     xoaSanPham (id){
//         return axios({
//             url :`${APICor,APILink}api/product/delete/${id}`,
//             method : `DELETE`,
//         })
//     }
// }
// export default productsServices
import axios from 'axios'
const APICor = `https://cors-anywhere.herokuapp.com/`
const APILink = `https://marketplacedata.herokuapp.com/`
class productsServices {

    danhSachSanPham (){
        return axios({
            url : `${APICor}${APILink}api/product/list?limit=20&page=1`,
            method: `GET`,
        })
    }
    themSanPham (data){
        return axios({
            url : `${APICor}${APILink}api/product`,
            method : `POST`,
            data
        })
    }
    chiTietSanPham(id){
        return axios({
            url : `${APICor}${APILink}api/product?id=${id}`,
            method: `GET`,
        })
    }
    xoaSanPham (id){
        return axios({
            url :`${APICor}${APILink}api/product/delete/${id}`,
            method : `POST`,
        })
    }
    timKiemSanPham(tenSanPham){
        return axios({
            url :`${APICor}${APILink}api/product/search?search=${tenSanPham}`,
            method : `GET`,
            data : tenSanPham
            
        })
    }
    danhMucSanPham(){
        return axios({
            url:`${APICor}${APILink}api/category/get`,
            method : `GET`,
        })
    }
    danhSachSanPhamTheoDanhMuc(id){
        return axios({
            url:`${APICor}${APILink}api/product/category/search?IdCategory=${id}`,
            method:`GET`,
            data : id
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
import axios from "axios"
const APICor = `https://cors-anywhere.herokuapp.com/`
const APILink = `https://marketplacedata.herokuapp.com/`
class userServices {
    dangNhap(data) {

        return axios({
            method: 'post',
            url: `${APICor}${APILink}api/users/login`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        })
    }
    thongTinTaiKhoan(token){
        return axios({
            method: "GET",
            url : `${APICor}${APILink}api/users/profile`,
            headers:{'Authorization':  token}
        })
    }
    dangKy(data){
        console.log(data);
        return axios({
            method : "POST",
            url : `${APICor}${APILink}api/users`,
            data
        })
    }

}
export default userServices
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/Action';
import { LOGINFACEBOOK } from '../../../Redux/Action/type';
import { DangNhap } from '../../../Redux/Action/user';
<<<<<<< HEAD
import LoginFacebook from "../../Login/Facebook.jsx";
=======
import LoginFB from '../../LoginFB'
>>>>>>> master
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            Password: ""
        }
    }
    onChange = (e) => {
        let input = e.target
        this.setState({
            [input.name]: input.value
        }, () => {
        })
    }

    onClick = (e) => {
        e.preventDefault();
        this.props.dispatch(DangNhap(this.state))
    }

    responseFacebook(response) {
        console.log(response)
      }
    render() {

        return (
            <form>
             
                <div className="form-group account__sign-form">
                    <label htmlFor="exampleInputEmail1">Email / SĐT</label>
                    <input type="text" name="Username" onChange={this.onChange} value={this.state.taiKhoan} className="form-control account-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập Email hoặc Số điện thoại" />
                </div>
                <div className="form-group account__sign-form">
                    <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                    <input type="password" name="Password" onChange={this.onChange} value={this.state.matKhau} className="form-control account-form" id="exampleInputPassword1" placeholder="Mật khẩu từ 6 đến 22 ký tự" />
                </div>
                <div className="form-group form-check check-form__account">
                    <p>Quên mật khẩu? Nhấn vào <a>đây</a></p>
                </div>
                <button onClick={this.onClick} className="btn btn-warning my-2 w-100">Đăng nhập</button>
<<<<<<< HEAD
                <FacebookLogin
                appId="562118384400275"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_friends"
                callback={this.responseFacebook}
                icon="fa-facebook" />
                <button className="btn btn-primary my-2 w-100" > Đăng nhập bằng Facebook</button>
=======
                <button className="btn btn-primary my-2 w-100"> Đăng nhập
        bằng Facebook</button>
                <LoginFB />
>>>>>>> master
                <button className="btn btn-danger my-2 w-100"><span><i className="fab fa-google-plus-g" /></span> Đăng
        nhập bằng Google</button> 
                <button className="btn btn-info my-2 w-100">Đăng nhập bằng Zalo</button>
                
            </form>
        );
    }
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps)(index);
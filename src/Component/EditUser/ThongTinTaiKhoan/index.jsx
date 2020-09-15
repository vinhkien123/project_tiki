import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'


class index extends Component {
    render() {
        return (
            <>
                <h3>Thông tin tài khoản</h3>

                <div className="container formUser">
                    <div className="form-group add__account-form">
                        <label htmlFor="inputEmail4">Họ tên</label>
                        <input type="text" className="form-control " id="inputEmail4" placeholder="Nhập họ tên" />
                    </div>
                    <div className="form-group add__account-form-number">
                        <label htmlFor="inputNumber4">SĐT</label>
                        <input type="text" className="form-control" id="inputNumber4" placeholder="Nhập số điện thoại" />
                        <a href="#">Nhập mã xác thực</a>
                    </div>
                    <div className="form-group add__account-form" style={{ clear: 'both' }}>
                        <label htmlFor="inputCode">Mã xác thực</label>
                        <input type="text" className="form-control" id="inputCode" placeholder="Nhập mã xác thực gửi tới số điện thoại trên" />
                    </div>
                    <div className="form-group add__account-form">
                        <label htmlFor="inputEmail2">Email</label>
                        <input type="email" className="form-control" id="inputEmail2" placeholder="Nhập email" />
                    </div>
                    <div className="form-group add__account-form">
                        <label htmlFor="inputPassword">Mật khẩu</label>
                        <input type="password" className="form-control" id="inputPassword" placeholder="Mật khẩu từ 6 đến 32 ký tự" />
                    </div>
                    <div className="form-group add__account-form">
                        <label htmlFor="customRadioInline">Giới tính</label>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customRadioInline1">Nam</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customRadioInline2">Nữ</label>
                        </div>
                    </div>
                    <div className="form-group add__account-form">
                        <label htmlFor="inputCity">Ngày sinh</label>
                        <div className="form-row">
                            <div className="form-group col-12 col-md-4 col-lg-4">
                                <select id="inputMonth" className="form-control">
                                    <option selected>Ngày</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group col-12 col-md-4 col-lg-4">
                                <select id="inputMonth" className="form-control">
                                    <option selected>Tháng</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group col-12 col-md-4 col-lg-4">
                                <select id="inputMonth" className="form-control">
                                    <option selected>Năm</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-warning float-right">Cập nhật</button>
                </div>
            </>
        );
    }
}

export default index;
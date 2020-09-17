import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div className="container formUser">
                <h2>Thêm địa chỉ </h2>
                <div className="form-group add__account-form">
                    <label htmlFor="inputEmail4">Địa chỉ</label>
                    <input type="text" className="form-control" name="FullName" onChange={this.onChange} id="inputEmail4" placeholder="Nhập họ tên" />
                </div>

                {/* <div className="form-group add__account-form">
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
            </div> */}

                <button onClick={this.onClick} className="btn btn-warning float-right">Cập nhật</button>
            </div>
        );
    }
}

export default index;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class index extends Component {
    render() {
        return (
            <div className="container">
                <NavLink to="admin/danhsachsanpham" className="btn btn-success">Quản lý sản phẩm</NavLink>
                <br />

                <NavLink to="admin/danhsachphim" className="mt-2 btn btn-success">Quản lý rạp phim</NavLink>
            </div>
        );
    }
}

export default index;
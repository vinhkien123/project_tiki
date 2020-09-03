import DanhSachSanPham from './DanhSachSanPham'
import React, { Component } from 'react';
import ThemSanPham from './Admin/Page/ThemSanPham'
import { NavLink } from 'react-router-dom';
import TrangChu from './Screens/TrangChu'
class index extends Component {
    render() {
        return (
            <div>
                <NavLink to="/admin" className="btn btn-success">Admin</NavLink>
                <TrangChu/>
                <DanhSachSanPham/>
            </div>
        );
    }
}

export default index;       
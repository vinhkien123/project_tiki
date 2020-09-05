import DanhSachSanPham from './DanhSachSanPham'
import React, { Component } from 'react';
import ThemSanPham from './Admin/Page/ThemSanPham'
import { NavLink } from 'react-router-dom';
import TrangChu from './Screens/TrangChu';
import Slidebar from './Sidebar'
import ButtonXemThem from './ButtonXemThem';
class index extends Component {
    render() {
        return (
            <div>
                <NavLink to="/admin" className="btn btn-success">Admin</NavLink>
                <TrangChu />
                
            </div>
        );
    }
}

export default index;       
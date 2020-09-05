import React, { Component } from 'react';
import Slidebar from '../../Sidebar'
import DanhSachSanPham from '../../DanhSachSanPham'
class index extends Component {
    render() {
        return (
            <div className="container">
                <Slidebar />
                <div className="content">
                    <div className="option">
                        <div className="button-option">
                            <span>Ưu tiên xem : </span>
                            <ul className="sort-list">
                                <li>
                                    <a href="#">HÀNG MỚI</a>
                                </li>
                                <li>
                                    <a href="#">BÁN CHẠY</a>
                                </li>
                                <li>
                                    <a href="#">GIẢM GIÁ NHIỀU</a>
                                </li>
                                <li>
                                    <a href="#">GIÁ THẤP</a>
                                </li>
                                <li>
                                    <a href="#">GIÁ CAO</a>
                                </li>
                                <li>
                                    <a href="#">CHỌN LỌC</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <DanhSachSanPham />

                </div>
            </div>
        );
    }
}

export default index;
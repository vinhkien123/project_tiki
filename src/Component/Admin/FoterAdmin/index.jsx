import React, { Component } from 'react'
import avatar from '../../../asset/admin/images/faces/face8.jpg'


import { NavLink } from 'react-router-dom'
export default class index extends Component {
    constructor(props) {
        super(props)
       
    }
    componentDidMount() {
        
        
    }
    render() {
        return (
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <a href="#" className="nav-link">
                            <div className="profile-image">
                                <img className="img-xs rounded-circle" src={avatar} alt="profile image" />
                                <div className="dot-indicator bg-success" />
                            </div>
                            <div className="text-wrapper">
                                <p className="profile-name">Kiên</p>
                                <p className="designation">Admin</p>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item nav-category">Main Menu</li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">
                            <i className="menu-icon typcn typcn-document-text" />
                            <span className="menu-title">Tất cả sản phẩm</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/themsanpham">
                            <i className="menu-icon typcn typcn-document-text" />
                            <span className="menu-title">Thêm sản phẩm</span>
                        </NavLink>
                    </li>
                   
                   


                </ul>
            </nav>

        )
    }
}

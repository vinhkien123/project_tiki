import React, { Component } from 'react';
import Sreach from '../Sreach'
import Logo from '../../asset/data/img/logo.jpg'
import Logo1 from '../../asset/data/img/header-logo.png'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faBell, faUser, faBars, faMapMarkerAlt, faAngleDown, faGift, faMedal, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import Model from '../Model';
import logoSale from '../../asset/data/imgHeader/khuyenmaihot.png'
import { connect } from 'react-redux'
import { ThongTinTaiKhoan } from '../../Redux/Action/user';
import { Popover, Button } from 'antd';
import { Redirect } from 'react-router-dom'
import logoMarket from '../../asset/data/imgHeader/market.png'
import uuDaiDoiTac from '../../asset/data/imgHeader/uudaidoitac.png'
import Slider from "react-slick";
// import { LOGINFACEBOOK } from '../../Redux/Action/type';

class index extends Component {
    componentDidMount() {
        // const user = JSON.parse(localStorage.getItem("user"))
        // if (user) {
        //     this.props.dispatch(ThongTinTaiKhoan(user.token))
        // }

    }

    DangXuat = () => {
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user");

        } else if (this.props.loginFacebook.name != "") {
            let obj = {}
            // this.props.dispatch(LOGINFACEBOOK, obj)
        }
        window.location.reload(false);

    }
    Reload = (link) => {

    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        let elementSanPham;
        let sanPham = localStorage.getItem("sanPham")

        if (sanPham) {
            let sanPhamObj = JSON.parse(sanPham)
            elementSanPham = sanPhamObj.map((item, index) => {
                return (
                    <Link to={`/chitietsanpham/${item.id}`} onClick={this.Reload} className="col-6 col-md-4 col-lg-2" key={index}>
                        <div className="card text-left" >
                            <img className="card-img-top" src={item.Image} alt />
                            <div className="card-body">

                                <h4 className="card-title" style={{ fontSize: "12px", textAlign: "center", fontWeight: "200" }}>{item.Name?.length > 44 ? item.Name.slice(0, 44) + "...." : item.Name}</h4>

                                {/* <Time /> */}

                            </div>
                        </div>
                    </Link>
                )
            })

        }
        const text = <span className="text-center">Sản phẩm đã xem</span>;
        const content = (
            <div className="row">
                {elementSanPham ? elementSanPham.length > 6 ?

                    <>
                    </>
                    :
                    <>
                        {elementSanPham}
                    </>
                    : <>
                        <p className="viewSanPham">&nbsp; &nbsp; &nbsp;Bạn chưa xem sản phẩm nào.
                    Hãy tiếp tục khám phá QT-Data, các sản phẩm bạn đã xem sẽ hiển thị ở đây!</p>
                    </>}
            </div>
        );
        ////////////////////////// KIỂM TRA XEM NGƯỜI DÙNG CÓ ĐĂNG NHẬP HAY CHƯA ///////////////////////////////
        let showLogin
        //////////////// KIỂM TRA NGƯỜI DÙNG CÓ ĐĂNG NHẬP TÀI KHOÀN WEBSITE NÀO //////////////////////////
        let user = localStorage.getItem("user")

        ///////////////////// tài khoản của website ///////////////////
        if (user) {
            user = JSON.parse(localStorage.getItem("user"))
            showLogin = <>
                <div className="dropdown login item">
                    <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p>
                            <span> Chào {this.props.user.FullName}</span><br></br>
                            <small>Tài khoản</small>
                        </p>
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <NavLink to="/user" className="dropdown-item" href="#">Thông tin tài khoản</NavLink>

                        <a className="dropdown-item view" href="#">Email : {this.props.user.Email}</a>
                        <a className="dropdown-item view" href="#">Điện thoại : {this.props.user.Phone}</a>
                        <a className="dropdown-item" onClick={this.DangXuat} href="#">Đăng xuất</a>

                    </div>
                </div>
            </>
        }
        ///////////////////// tài khoản của facebook ///////////////////

        // else if (this.props.loginFacebook.status != "unknown") {
        //     showLogin = <>
        //         <div className="dropdown login item">
        //             <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                 <p>
        //                     <span> Chào {this.props.loginFacebook.name}</span><br></br>
        //                     <small>Tài khoản</small>
        //                 </p>
        //             </div>
        //             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        //                 <a className="dropdown-item" href="#">Thông tin tài khoản</a>

        //                 <a className="dropdown-item view" href="#">Tài khoản : {this.props.user.Username}</a>
        //                 <a className="dropdown-item view" href="#">Email : {this.props.user.Email}</a>
        //                 <a className="dropdown-item view" href="#">Điện thoại : {this.props.user.Phone}</a>
        //                 <a className="dropdown-item" onClick={this.DangXuat} href="#">Đăng xuất</a>

        //             </div>
        //         </div>
        //     </>
        // }

        ///////////////////// Chưa đăng nhập ///////////////////

        else {
            showLogin = <Model />

        }


        console.log("THONGTINTAIKHOAN", this.props.thongTinTaiKhoan);

        const danhMucSanPham = this.props.danhMucSanPham.map((item, index) => {
            return (
                <a className="dropdown-item" href="#" ><img src={item.icon} width={20} className="mr-1" alt="" />{item.title}</a>

            )
        })
        ///////////////////////////////// renderrr/////////////////////

        console.log(this.props.user,"useertest");

        return (
            //// HEADER //////
            <section className="container-fuild header">
                <div className="headerTop ">
                    <div className="text-HeaderTop container row">

                        <NavLink to="movie"  >
                            <img src={uuDaiDoiTac} width={18} style={{ marginRight: 4 }} />
                            Ưu đãi đối tác
                         </NavLink>
                        <NavLink to="/khuyenmai" onClick={this.Reload} >
                            <img src={logoSale} width={18} style={{ marginRight: 4 }} />
                            Khuyến mãi HOT
                         </NavLink>
                        <NavLink to="/dangkybanhang" >
                            <img src="https://salt.tikicdn.com/ts/upload/42/f9/5e/7ccf8b09de0e051cc9054bd535f7b1a1.png" width={18} style={{ marginRight: 4 }} />
                            Bán hàng cùng Tiki
                         </NavLink>
                        {/* <a href="#">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/736dfae48db88034a73e7fdb7f72756b.png" width={18} style={{ marginRight: 4 }} />
                            Trợ lý Tiki
                            </a>
                        <a href="#">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/736dfae48db88034a73e7fdb7f72756b.png" width={18} style={{ marginRight: 4 }} />

                            Ưu đãi đối tác
                        </a>
                        <a href="#">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/736dfae48db88034a73e7fdb7f72756b.png" width={18} style={{ marginRight: 4 }} />

                            Đặt vé máy bay
                        </a>
                        <a href="#">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/736dfae48db88034a73e7fdb7f72756b.png" width={18} style={{ marginRight: 4 }} />

                            Khuyến mãi HOT
                        </a>
                        <a href="#">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/736dfae48db88034a73e7fdb7f72756b.png" width={18} style={{ marginRight: 4 }} />

                            Hàng quốc tế
                        </a>
                        <a href="#">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/736dfae48db88034a73e7fdb7f72756b.png" width={18} style={{ marginRight: 4 }} />

                            Bán hàng cùng Tiki
                        </a> */}
                    </div>
                </div>
                <div className="container headerMid">
                    <div className="midLeft row">
                        <div className="logo col-4 col-md-2 col-lg-1">

                            <NavLink to="/" onClick={this.Reload}>
                                <img src={Logo1} height={33} alt="" />
                            </NavLink>
                        </div>
                        <div className="form-sreach col-8 col-md-10 col-lg-6 mt-3" style={{ marginLeft: "40px" }}>
                            <Sreach />
                        </div>
                        <div className="header-link col-12 col-md-10 col-lg-5 mt-2">
                            <a href="#" className="item">
                                <i className="icon-tracking"></i>
                                Theo dõi <br></br>
                                đơn hàng
                            </a>
                            <a href="#" className="item">
                                <i className="icon-tracking"></i>
                                Thông báo <br></br>
                                của tôi
                            </a>

                            {/* MODEL */}
                            {showLogin}


                            <div className="header-cart">
                                <NavLink to="/giohang" onClick={this.Reload} className="item">
                                    <i class="fa fa-shopping-cart"></i>
                                    Giỏ hàng
                                    <span className="card-count"></span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headerBottom container">
                    <div className="row">
                        <div className="menu col-12 col-md-6 col-lg-2">
                            <a href="#" type="button" className="btn btn-primary dropdown-toggle" style={{ background: "none", border: "none" }} id="dropdownMenuOffset" data-toggle="dropdown">
                                <FontAwesomeIcon icon={faBars} /> Danh mục sản phẩm
                           </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                {danhMucSanPham}
                            </div>
                        </div>
                        <div className="viTri col-6 col-md-6 col-lg-2">

                            <a href="#" type="button" className=" viTriGiaoHang" data-toggle="modal" data-target="#giaoHang">
                                &nbsp;
                                &nbsp;
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "red" }} />
                                &nbsp;
                                <span>Bạn muốn giao hàng tới đâu</span>
                            </a>
                            {/* Modal */}
                            <div className="modal fade" id="giaoHang" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Địa chỉ giao hàng</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <p>Hãy chọn địa chỉ nhận hàng để được dự báo thời gian giao hàng cùng phí đóng gói, vận chuyển một
                                                cách chính xác nhất.</p>
                                            <div className="button-sign">
                                                <button className="btn btn--yellow-1 btn-warning">Đăng nhập để chọn địa chỉ giao hàng</button>
                                                <div className="text_sign d-flex">
                                                    <p>hoặc</p>
                                                </div>
                                            </div>
                                            <div className="form-check check-sign_form">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                <label className="form-check-label" htmlFor="exampleRadios1">
                                                    Chọn khu vực giao hàng
            </label>
                                            </div>
                                            <form className="form-sign_in">
                                                <div className="form-group row">
                                                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Tỉnh/Thành phố</label>
                                                    <div className="col-sm-9">
                                                        <select id="inputState" className="form-control">
                                                            <option selected>Vui lòng chọn tỉnh/thành phố</option>
                                                            <option>Hồ Chí Minh</option>
                                                            <option>Hà Nội</option>
                                                            <option>Đà Nẵng</option>
                                                            <option>An Giang</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <fieldset disabled>
                                                    <div className="form-group row">
                                                        <label htmlFor="disabledTextInput" className="col-sm-3 col-form-label">Quận/Huyện</label>
                                                        <div className="col-sm-9">
                                                            <select id="disabledSelect" className="form-control">
                                                                <option>Vui lòng chọn quận/huyện</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="disabledTextInput" className="col-sm-3 col-form-label">Phường/Xã</label>
                                                        <div className="col-sm-9">
                                                            <select id="disabledSelect" className="form-control">
                                                                <option>Vui lòng chọn phường/xã</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form></div>
                                        <div className="modal-footer form-sign_btn">
                                            <button type="button" className="btn btn--red-1 btn-danger" data-dismiss="modal">GIAO ĐẾN ĐỊA CHỈ NÀY</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style={{ paddingTop: "0px" }} className="sanPhamDaXem col-6 col-md-6 col-lg-2">
                            <Popover placement="bottom" title={text} content={content} trigger="click">
                                <Button>Sản phẩm bạn đã xem</Button>
                            </Popover>
                        </div>
                        <div className="link col-12 col-md-6 col-lg-6">
                            <NavLink to="/movie" onClick={this.Reload}>
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/tiki-card.svg" alt="" />
                                <span>Bán vé rạp phim</span>
                            </NavLink>
                            <NavLink to="/khuyenmai" onClick={this.Reload}>
                                <img src={logoMarket} alt="" />
                                <span>
                                    Sản phẩm khuyến mãi
                                </span>
                            </NavLink>
                            <a href="#">
                                <img src="https://salt.tikicdn.com/ts/upload/c1/cc/d0/6dc657167181c1b6b93c8da654dddac3.png" alt="" />
                                <span>
                                    Đổi trả
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}
const mapStateToProps = state => ({
    user: state.userReducers.thongTinTaiKhoan,
    loginFacebook: state.userReducers.loginFacebook,
    thongTinTaiKhoan: state.userReducers.thongTinTaiKhoan,
    danhMucSanPham: state.productReducers.danhMucSanPham

})
export default connect(mapStateToProps)(index);
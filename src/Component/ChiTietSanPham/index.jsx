import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../Sass/main.scss'
import { NavLink } from 'react-router-dom';
import productsServices from '../../Services/products';
import { ProductsService } from '../../Services';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { ChiTietSanPham } from '../../Redux/Action/product';
class index extends Component {
    constructor(props){
        super(props)
        this.state={
            soLuong : 1,
        }
    }
    tangSoLuong= ()=>{
        this.setState({soLuong : this.state.soLuong+1})
    }
    giamSoLuong= ()=>{
        this.setState({soLuong :  this.state.soLuong-1})
    }
    render() {
        console.log(this.props.sanPham,"Text");
        const giaGiam = this.props.sanPham.giaSanPham/100*35
        const giaThiTruong = Number(this.props.sanPham.giaSanPham) + giaGiam
        const giaGiamString = giaGiam.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var gia = Number(this.props.sanPham.giaSanPham)
        const giaSanPham = gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return (
            <div className="container detail">
                <div className="row">
                    <div className="col-5 left" style={{ borderRight: "2px solid rgb(247, 247, 247);", }}>
                        <img style={{ padding: "24px 24px 24px 20px;",width:"390px",height:"390px" }} src={this.props.sanPham.img} alt="" />
                    
                    </div>
                    <div className="col-7 right">
                        <h1 className="title">
                            <div className="hinhAnh">
                                <img src="https://salt.tikicdn.com/ts/upload/e9/68/49/50ac83c9f95bd008cc840e638f0f5791.png" />
                            </div>
                            | {this.props.sanPham.tenSanPham}
                        </h1>
                        <div className="icone">
                            <p>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half"></i>
                            </p>
                        </div>
                        <div className="icone-cup">
                            <i class="fa fa-trophy"></i>
                            <p>
                                <span>&nbsp;Đứng thứ {/* */}1</span> trong{/* */}
                                <a href="#">
                                    &nbsp;  Top 100 {/* */}Sách Tôn Giáo - Tâm Linh{/* */} bán chạy tuần này
                                 </a>
                            </p>
                        </div>
                        <div className="text">

                            <h6>Thương hiệu:
                            <a href="#">
                                    Apple
                                </a>
                            </h6>
                            <h6 class="ml-5">SKU:
                                <span itemProp="sku">
                                    5555704961119
                                 </span>
                            </h6>
                        </div>
                        <hr></hr>
                        <div className=" text-free">
                            <div className="">
                                <img src="https://salt.tikicdn.com/ts/upload/cd/74/0a/862aa1925b1d4c8b837c544e40e5d4cb.png" alt="free shipping" />
                            </div>
                            <div className="right">
                                <div className="title ">
                                    Miễn phí giao tiêu chuẩn (tối đa 100k)
                                </div>
                                <div className="text">
                                    cho đơn hàng từ 999k &nbsp;
                                  <a href="https://hotro.tiki.vn/hc/vi/articles/360041890732-C%C3%A1ch-t%C3%ADnh-ph%C3%AD-v%E1%BA%ADn-chuy%E1%BB%83n-%C3%A1p-d%E1%BB%A5ng-t%E1%BB%AB-th%C3%A1ng-6-2020">
                                        Xem chi tiết
                                  </a>

                                </div>
                            </div>



                        </div>
                        <div className="giaSanPham">
                            <p class="price">{
                            giaSanPham
                               
                            
                            
                            } &nbsp;₫</p>

                            <p className="original-price ">Tiết kiệm: <span>35%</span> ({giaGiamString} ₫)</p>
                            <p className="original-price">Giá thị trường: {giaThiTruong.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ₫</p>


                        </div>
                        <div className="group top">
                            <div className="flex">
                                <div className="soLuong">
                                    <p>Số lượng : </p>
                                    <div className="group-input">
                                        <button onClick={this.giamSoLuong}>-</button>
                                        <input type="text" name="" className="input" value={this.state.soLuong} id="" />
                                        <button onClick={this.tangSoLuong}>+</button>
                                    </div>
                                </div>
                                <div className="group-button">
                                    <button className="btn btn-danger">
                                        <i class="fa fa-cart-plus"></i>
                                        CHỌN MUA</button>
                                </div>
                            </div>

                        </div>
                        <div className=" top">
                            {this.props.sanPham.moTa}
                        </div>
                        <div className="top review">
                            <h2>DỊCH VỤ & KHUYẾN MÃI LIÊN QUAN</h2>
                            <ul>
                                <li>
                                    Đăng kí gói <b>TikiNOW</b> để nhận giao hàng miễn phí và nhiều ưu đãi dành riêng cho thành viên - <a href="#">Xem chi tiết</a>
                                </li>
                                <li>
                                    Nhận ngay voucher Tiki 1 triệu đồng và Săn ngay 10 Samsung Note20 Ultra với thẻ Sacombank Tiki Platinum. Xem chi tiết
                                </li>
                                <li>
                                    Miễn phí giao hàng 30K cho đơn hàng từ 249K. Miễn phí giao hàng 50K cho đơn hàng từ 499K.
                                    Miễn phí giao hàng 100K cho đơn hàng từ 999K. Mỗi khách được sử dụng 1 lần/ 1 ưu đãi phí ship
                                </li>
                                <li>
                                    Hoàn tiền 15% cho mọi chi tiêu với Thẻ Tín Dụng Liên Kết Sacombank Tiki Platinum - <a href="#">Mở thẻ ngay</a>
                                </li>
                                <li>
                                    Nhập ZALOPAY20 giảm 20K cho đơn hàng từ 100K khi thanh toán qua Zalopay, từ 20/08/2020 - 31/08/2020.
                                Số lần sử dụng: 1 lần/khách hàng. Số lượng có hạn. Chi tiết tại đây<a href="#">
                                        LƯU MÃ
                                </a>
                                </li>
                                <li>
                                    Nhập mã ZALOPAY10 Giảm ngay 10.000 VND cho đơn hàng sách có giá trị từ 30.000 VND khi thanh toán qua ZaloPay. Số lần sử dụng: 1 lần/khách hàng. Số lượng có hạn. Chi tiết tại đây
                                <a href="#">LƯU MÃ</a>
                                </li>
                                <li>
                                    Nhận Quà Tặng 17.3tr & Gói TikiNOW 1 Năm với thẻ Citi.
                                    <a href="#">
                                        Mở thẻ ngay
                                    </a>
                                </li>
                                <li>Nhập mã T8DZUT8 giảm 8% (Tối đa 30k) cho đơn hàng từ 100k trở lên.Áp dụng cho các sản phẩm Sách do Tiki phân phối.
                                    <a href="#">LƯU MÃ</a>
                                </li>
                                <li>
                                    Nhập mã TIKIMOMO khi tải và đăng kí MoMo để được: Coupon 50K cho đơn từ 300K,
                                    Thêm 2 coupon 30K cho đơn hàng tiếp theo từ 300K.
                                   <a href="#">Xem chi tiết</a>
                                </li>
                                <li>
                                    Đăng ký dịch vụ BookCare để được bọc plastic đến 99% sách tại Tiki.vn
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
    componentDidMount(){
        this.props.dispatch(ChiTietSanPham(this.props.match.params.id))
    }
}
const mapStateToProps = (state) => ({
    sanPham : state.productReducers.chiTietSanPham
})
export default connect(mapStateToProps)(index);
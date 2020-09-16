import React, { Component } from 'react';
import { connect } from 'react-redux'
import { DanhSachSanPham } from '../../Redux/Action/product';
import { ShopingServices } from '../../Services';
class index extends Component {
    render() {
        const elementGioHang = this.props.danhSachSanPham.map((item, index) => {
            return (
                <li className="cart-products__product" key={index}>
                    <div className="cart-products__inner">
                        <div className="cart-products__img">
                            <a href="#" className="">
                                <img src={item.img} alt="" />
                            </a>
                        </div>
                        <div className="cart-products__content">
                            <div className="cart-products__content--inner">
                                <div className="cart-products__desc">
                                    <a href="#" className="cart-products__name">
                                        {item.tenSanPham}
                                    </a>
                                    <span className="cart-products__seller">
                                        Cung cấp bởi ....
                                    </span>
                                    <p className="cart-products__actions">
                                        <span className="cart-products__del">Xóa</span>
                                        <span className="cart-products__buy-later">Để dành mua sau</span>
                                    </p>
                                </div>
                                <div className="cart-products__details">
                                    <div className="cart-products__pricess">
                                        <p className="cart-products__real-prices">
                                            {item.giaSanPham?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} &nbsp; ₫
                                        </p>
                                        <p className="cart-products__discount-prices">
                                            <del>2.290.000đ</del>
                                            <span> | 14%</span>
                                        </p>
                                    </div>
                                    <div className="cart-products__qty">
                                        <div className="group-input">
                                            <button >-</button>
                                            <input type="text" name="" className="input" value="1" id="" />
                                            <button >+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

            )
        })
        return (
            <div className="gioHang container my-5">
                <h2 className="title"> Giỏ hàng <span>({this.props.danhSachSanPham.length} Sản phẩm)</span></h2>
                <div className="row">
                    <div className="cart-products-inner" style={{ float: "left" }} >
                        <ul className="cart-products__products">
                            {elementGioHang}

                            {/* test */}

                        </ul>
                    </div>
                    <div className="cart-total-prices">
                        <div className="cart-total-prices__inner">
                            <div className="prices">
                                <ul className="prices__items">
                                    <li className="prices__item">
                                        <span className="prices__text">Tạm tính</span>
                                        <span className="prices__value">2.099.000đ</span>
                                    </li>
                                </ul>
                                <p className="prices__total">
                                    <span className="prices__text">Thành tiền</span>
                                    <span className="prices__value ">
                                        2.099.000đ <i>(Đã bao gồm VAT nếu có)</i>
                                    </span>
                                </p>
                                <button className="cart__submit">Tiến hàng đặt hàng</button>
                                <div className="coupon">
                                    <p className="coupon-title">
                                        Mã giảm giá / Quà tặng
                                </p>
                                    <div className="inner">
                                        <input type="text" className="coupon-input" placeholder="Nhập ở đây...." />
                                        <button className="coupon-button" disabled>Đồng ý</button>
                                    </div>
                                    <div className="coupon-content">
                                        <p className="note">
                                            Mã giảm giá đã lưu.
                                        <a href="#">Xem tại đây</a>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.props.dispatch(DanhSachSanPham())
        ShopingServices.layDanhSachGioHang().then(res=>{
            console.log("Lấy danh sách giỏ hàng thành công",res.data);
        }).catch(err=>{
            console.log(err);
        })
    }
}

const mapStateToProps = state => ({
    danhSachSanPham: state.productReducers.danhSachSanPham,
    
})
export default connect(mapStateToProps)(index);
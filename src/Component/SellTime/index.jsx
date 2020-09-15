import React, { Component } from 'react';
import { connect } from 'react-redux'
import DanhSachSanPham from '../DanhSachSanPham'
import { NavLink, Link } from 'react-router-dom';
import Time from '../Time'
class index extends Component {
    render() {
        console.log("viewcode",this.props.danhSachSanPham);
        const danhSachSale = this.props.danhSachSanPham.filter(item => item.StatusSale == true)
        const elementSellTime = danhSachSale.map((item, index) => {
            const giaGiam = (item.Price - (item.Price / 100 * item.giaGiam)).toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")
            const giaSanPham = item.Price.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")

            return (
                <Link to={`/chitietsanpham/${item._id}`} className="col-12 col-md-6 col-lg-3 card-tiki" style={{ position: "relative" }} key={index}>
                    <div className="card text-left" >
                        <img className="card-img-top" src={item.ImageList[0]} alt />
                        <div className="card-body">

                            <h4 className="card-title">{item.Name.length > 44 ? item.Name.slice(0, 44) + "...." : item.Name}</h4>
                            <p className="sellPrice">{giaSanPham} ₫</p>
                            <p className="card-text text-danger gia-hover">{giaGiam}&nbsp; ₫</p>
                            <span className="giamGia">-{item.giaGiam}%</span>
                            <div className="bottom">
                                <div className="sellTime">
                                    <div className="sell">
                                        <div className="products">
                                            <div className="width-sell" style={{ width: "20%" }}></div>
                                            <div className="content-sell">
                                                <span><i class="fa fa-fire"></i></span>
                                                <p className="text">Đã bán 1</p>
                                            </div>
                                        </div>
                                        <Time time={item.ExpirationDateSale} id={item._id} item={item} />
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-success">Mua sản phẩm</button>
                            {/* <Time /> */}

                        </div>
                    </div>
                </Link>
            )
        })
        return (
            <>
                {elementSellTime}
            </>
        );
    }
}

const mapStateToProps = state => ({
    danhSachSanPham: state.productReducers.danhSachSanPham
})
export default connect(mapStateToProps)(index);
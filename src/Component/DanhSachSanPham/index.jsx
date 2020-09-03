import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../Sass/main.scss'
import { DanhSachSanPham, ThemSanPham } from '../../Redux/Action/product';
import { NavLink } from 'react-router-dom';

class index extends Component {

    componentDidMount() {
        this.props.dispatch(DanhSachSanPham())
    }
    render() {
        const danhSachSanPham = this.props.danhSachSanPham.map((item, index) => {
            const giaSanPham = item.giaSanPham.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            return (
                <NavLink to={`/chitietsanpham/${item.id}`} className="col-12 col-md-6 col-lg-3 card-tiki" key={index}>
                    <div className="card text-left" >
                        <img className="card-img-top" src={item.img} alt />
                        <div className="card-body">
                            <h4 className="card-title">{item.tenSanPham.length>44?item.tenSanPham.slice(0,44)+"....":item.tenSanPham}</h4>
                            <p className="card-text text-danger gia-hover">{giaSanPham}&nbsp; ₫</p>

                            <button className="btn btn-success">Mua sản phẩm</button>

                        </div>
                    </div>
                </NavLink>

            )
        })
        return (
            <div className="container">
                <div className="row">
                    {danhSachSanPham}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    danhSachSanPham: state.productReducers.danhSachSanPham
})
export default connect(mapStateToProps)(index);
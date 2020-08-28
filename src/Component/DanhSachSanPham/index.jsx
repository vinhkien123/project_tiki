import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../Sass/main.scss'
import { DanhSachSanPham, ThemSanPham } from '../../Redux/Action/product';

class index extends Component {

    componentDidMount() {
        this.props.dispatch(DanhSachSanPham())
    }
    render() {
        const danhSachSanPham = this.props.danhSachSanPham.map((item, index) => {
            return (
                <div className="col-12 col-md-6 col-lg-3 card-tiki" key={index}>
                    <div className="card text-left" >
                        <img className="card-img-top" src={item.img} alt />
                        <div className="card-body">
                            <h4 className="card-title">{item.tenSanPham}</h4>
                            <p className="card-text text-danger gia-hover">{item.giaSanPham}&nbsp; Đồng</p>

                            <button className="btn btn-success">Mua sản phẩm</button>

                        </div>
                    </div>
                </div>

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
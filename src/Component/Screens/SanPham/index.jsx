import React, { Component } from 'react';
import Slidebar from '../../Sidebar'
import DanhSachSanPham from '../../DanhSachSanPham'
import { connect } from 'react-redux'
import { createAction } from '../../../Redux/Action';
import { SREACHAZ, SREACHZA } from '../../../Redux/Action/type';
import { Flip, Slide } from 'react-reveal'
class index extends Component {
    sreachAZ = (ds) => {
        ///// Sắp xếp sản phẩm theo giá từ a -> z
        const az = ds.sort((a, b) => {
            return a.giaSanPham - b.giaSanPham
        })
        this.props.dispatch(createAction(SREACHAZ, az))
    }
    sreachZA = () => {
        ///// Sắp xếp sản phẩm theo giá từ a -> z
        const za = this.props.danhSachSanPham.sort((a, b) => {
            return b.giaSanPham - a.giaSanPham
        })
        this.props.dispatch(createAction(SREACHZA, za))
    }
    render() {
        console.log("API ", this.props.sreachProductApi);
        return (
            <div className="viewContent" style={{ overflow: "hidden" }}>
                <Flip>
                    <Slidebar />
                </Flip>
                <Slide top>
                    <div className="content col-12 col-lg-9">
                        <div className="option">
                            {
                                this.props.keyWord != "" ?

                                    <h3 className="text-sreach">Kết quả tìm kiếm cho '{this.props.keyWord}': <span>{this.props.sreachKeyWord.length} sản phẩm</span></h3>
                                    : ""
                            }
                            <div className="button-option">
                                <span>Ưu tiên xem : </span>
                                <ul className="sort-list">
                                    {/* <li>
                                    <a href="#">HÀNG MỚI</a>
                                </li>
                                <li>
                                    <a href="#">BÁN CHẠY</a>
                                </li>
                                <li>
                                    <a href="#">GIẢM GIÁ NHIỀU</a>
                                </li> */}
                                    <li>
                                        <a href="#" onClick={() => this.sreachAZ(this.props.danhSachSanPham)}>GIÁ THẤP ĐẾN CAO</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={this.sreachZA}>GIÁ CAO ĐẾN THẤP</a>
                                    </li>
                                    {/* <li>
                                    <a href="#">CHỌN LỌC</a>
                                </li> */}
                                </ul>
                            </div>
                        </div>
                        <div style={{ paddingLeft: "20px" }}>
                            <div className="row">
                                <DanhSachSanPham sreachPrice={this.props.sreachPrice} sreachProductApi={this.props.sreachProductApi}/>

                            </div>
                        </div>


                    </div>
                </Slide>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    sreachPrice: state.productReducers.sreachPrice,
    danhSachSanPham: state.productReducers.danhSachSanPham,
    sreachKeyWord: state.productReducers.sreachKeyWord,
    keyWord: state.productReducers.keyWord,
    sreachProductApi : state.productReducers.sreachProductApi

})
export default connect(mapStateToProps)(index);
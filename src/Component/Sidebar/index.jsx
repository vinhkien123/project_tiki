import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DanhSachSanPham } from '../../Redux/Action/product';
import { createAction } from '../../Redux/Action';
import { SREACHPRICE, DANHSACHSANPHAM } from '../../Redux/Action/type';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceStart: "",
            priceCome: "",
            sreachPrice: [],
        }
    }
    sreachPrice = () => {
        ///// Kiểm tra giá bắt phải nhỏ hơn giá tìm đến mới sreach
        if (this.state.priceStart <= this.state.priceCome) {
            ///////// Chuyển giá từ chuỗi sang kiểu dữ liệu số và xóa dấu , đơn vị
            const priceStart = Number(this.state.priceStart.split(",").join(""))
            const priceCome = Number(this.state.priceCome.split(",").join(""))
            ////// Tìm kiếm giá sản phẩm
            const sreachPrice = this.props.danhSachSanPham.filter(item =>
                item.giaSanPham >= priceStart && item.giaSanPham <= priceCome

            )
            //// LƯU SẢN PHẨM VÀO STATE
            this.setState({sreachPrice},()=>{
                this.props.dispatch(createAction(DANHSACHSANPHAM,sreachPrice))
            })
        }
    }
    onChangePrice = (e) => {
        //// Lấy dữ liệu từ from input
        let input = e.target
        let value = input.value.split(",").join("");

        ////Chuyển kiểu dữ liệu qua number
        const kieuDuLieu = Number(value)

        ///// Kiểm trả value input từ from nếu là số thì sẽ set state
        if (Number.isNaN(kieuDuLieu) == false) {
            var giaSanPham = kieuDuLieu.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")

        } else {
            var giaSanPham = ""
        }
        // }else if(number=="NaN"){
        //    var giaSanPham = "";
        // }
        //  else if (e.keyCode == 8) {
        //     var giaSanPham = number.substring(0, value.length - 1);
        // }
        ///// Add dô state
        this.setState({
            [input.name]: giaSanPham,
        }, () => {
         
        })

    }
    componentDidMount() {
        this.props.dispatch(DanhSachSanPham())
    }
    render() {
        return (
            <div className="side-bar col-12 col-lg-3" style={{ borderRight: "2px solid #f7f7f7" }}>
                <div className="panel">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <a href="#" className="panel-link">
                                Danh mục sản phẩm
                            </a>
                        </h3>
                    </div>
                    <div className="panel-content">
                        <div className="list-group">
                            <div className="top">
                                <a href="#" className="item">
                                    Điện thoại - Máy tính bảng <span>(428)</span>
                                </a>
                            </div>
                            <div className="element">
                                <a href="#" className="item">
                                    Máy tính bảng <span>(47)</span>
                                </a>
                            </div>
                            <div className="element" >
                                <a href="#" className="item">
                                    Máy đọc sách <span>(18)</span>

                                </a>
                            </div>
                            <div className="element">
                                <a href="#" className="item">
                                    Điện thoại Smartphone <span>(167)</span>

                                </a>
                            </div>
                            <div className="element">
                                <a href="#" className="item">

                                    Điện thoại bàn <span>(100)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel" style={{ borderTop: "2px solid #f7f7f7" }}>
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <a href="#" className="panel-link">
                                Giá
                            </a>
                        </h3>
                    </div>
                    <div className="panel-price">
                        <div className="price-slide">
                            <p className="price-title">Chọn khoảng giá</p>
                            <div className="from-input" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <input className="input" name="priceStart" value={this.state.priceStart} onChange={this.onChangePrice} />
                                <span>-</span>
                                <input className="input" name="priceCome" value={this.state.priceCome} onChange={this.onChangePrice} />
                            </div>
                            <button type="button" onClick={this.sreachPrice} style={{ padding: "5px 15px", width: "99px", marginTop: "8px", borderRadius: "4px" }} className="btn btn-outline-primary">OK</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    danhSachSanPham: state.productReducers.danhSachSanPham,
})
export default connect(mapStateToProps)(index);
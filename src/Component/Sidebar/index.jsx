import React, { Component } from 'react';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceStart: "",
            priceCome: ""
        }
    }
    onChangePrice = (e) => {
        let input = e.target
        let value = input.value.replace(",", "")
        const number = Number(value)
        console.log(number,"qqq");
        if (typeof (number) == "number") {
            var giaSanPham = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

        }else if(number=="NaN"){
           var giaSanPham = "";
        }
         else if (e.keyCode == 8) {
            var giaSanPham = number.substring(0, value.length - 1);
        }
        this.setState({
            [input.name]: giaSanPham,
        },()=>{

        })

    }
    render() {
        return (
            <div className="side-bar" style={{borderRight:"2px solid #f7f7f7"}}>
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
                <div className="panel" style={{borderTop:"2px solid #f7f7f7"}}>
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
                            <button type="button" onChange={this.onChangePrice} style={{ padding: "5px 15px", width: "99px", marginTop: "8px", borderRadius: "4px" }} className="btn btn-outline-primary">OK</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default index;
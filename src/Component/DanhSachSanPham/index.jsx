import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import '../../Sass/main.scss'
import { DanhSachSanPham, ThemSanPham } from '../../Redux/Action/product';
import { Link, NavLink } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";


class index extends Component {

    componentDidMount() {
        this.props.dispatch(DanhSachSanPham())
        console.log();
    }
    onClickSave = (sanPham) => {
        let array
        ///// Kiểm tra có chuỗi JSON sản phẩm không
        if (localStorage.getItem('sanPham')) {
            // chuyển từ chuỗi JSON sang array chứa object sản phẩm
            array = JSON.parse(localStorage.getItem('sanPham'))
            // thêm vô 1 object sản phẩm vào array chứa object sản phẩm
            array.push(sanPham)
            /////// chuyển từ array sang chuỗi json =>>> đưa chuỗi json lên localStorage 
            localStorage.setItem('sanPham', JSON.stringify(array))
        }
        ///// Nếu không có thì tạo 1 cái array mới
        else {
            array = []
            array.push(sanPham)
            localStorage.setItem('sanPham', JSON.stringify(array))

        }
        setTimeout(() => {
            window.location.reload(false);
        }, 1)

    }

    renderDanhSachSanPham = (item, index) => {
        const giaSanPham = item.Price?.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ",")

        return (
            <Link onClick={() => this.onClickSave(item)} to={`/chitietsanpham/${item._id}`} className="col-12 col-md-6 col-lg-3 card-tiki" key={index}>
                <div className="card text-left" >
                    <img className="card-img-top" src={item.ImageList[0]} alt />
                    <div className="card-body">

                        <h4 className="card-title">{item.Name?.length > 44 ? item.Name?.slice(0, 44) + "...." : item.Name}</h4>
                        <p className="card-text text-danger gia-hover">{giaSanPham}&nbsp; ₫</p>

                        <button className="btn btn-success">Mua sản phẩm</button>
                        {/* <Time /> */}

                    </div>
                </div>

            </Link>
        )
    }
    render() {
        console.log("danhsach", this.props.danhSachSanPham);
        const danhSach = this.props.danhSachSanPham.filter(item => item.StatusSale == true)
        const danhSachSanPham = this.props.danhSachSanPham.map((item, index) => {
            return (

                this.renderDanhSachSanPham(item, index)

            )
        })
        let softPrice, sreachPrice, sreachKeyWord, renderKeyWord;

        // softPrice = this.props.sreachPrice.sort((a, b) => {
        //     return a.giaSanPham - b.giaSanPham;
        // })
        // sreachPrice = this.props.sreachPrice.map((item, index) => {
        //     return (
        //         this.renderDanhSachSanPham(item, index)
        //     )
        // })
        console.log("???????",this.props.sreachProductApi);
        sreachKeyWord = this.props.sreachProductApi?.map((item, index) => {
            return (
                this.renderDanhSachSanPham(item, index)
            )
        })
        ///// Tìm kiếm trên client
        // danhSach.filter(
        //     ///////// Sreach chữ viết hoa và thường
        //     item => item.Name.toLowerCase().indexOf(this.props.keyWord) != -1
        // )
        // renderKeyWord = sreachKeyWord.map((item, index) => {
        //     return (
        //         this.renderDanhSachSanPham(item, index)
        //     )
        // })

        let render
        // if (this.props.sreachPrice.length >= 1) {
        //     //// render khi người dùng sreach giá từ a -> b
        //     render = sreachPrice
        // } else if (this.props.sreachPrice.length <= 0) {
        //     //// render khi không có yêu cầu gì 
        //     render = danhSachSanPham
        // }
        render = danhSachSanPham
        if (this.props.keyWord != "") {
            render = sreachKeyWord
        }
        return (
            <>
                {render}
            </>
        );
    }
}


const mapStateToProps = state => ({
    danhSachSanPham: state.productReducers.danhSachSanPham,
    sreachAz: state.productReducers.sreachAz,
    sreachZa: state.productReducers.sreachZa,
    sreachPrice: state.productReducers.sreachPrice,
    keyWord: state.productReducers.keyWord
})
export default connect(mapStateToProps)(index);
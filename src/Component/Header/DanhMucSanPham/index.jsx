import React, { Component } from 'react';
import { connect } from 'react-redux';

class index extends Component {
    SreachTheoDanhMuc = (id) => {

        // this.props.dispatch(DanhSachSanPhamTheoDanhMuc(id))
    }
    render() {
        const danhMucSanPham = this.props.danhMucSanPham.map((item, index) => {
            return (

                <a href={`/sanPham/danhmuc/${item.Title}/${item._id}`} className="dropdown-item hover"
                    onClick={() => this.SreachTheoDanhMuc(item._id)} ><img src={item.Icon}
                        width={20} className="mr-1" alt="test" />
                    {item.Title}
                </a>

            )
        })
        return (
            <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuOffset">
                {danhMucSanPham}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    danhMucSanPham: state.productReducers.danhMucSanPham,

})
export default connect(mapStateToProps)(index);
import React, { Component } from 'react';
import Sreach from '../Sreach'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
class index extends Component {
    render() {
        const elementDanhMuc = this.props.danhMucSanPham.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td><img src={item.title} alt="" /></td>
                    <td>{item.icon}</td>
                    <td><button className="btn btn-danger" onClick={() => this.xoaSanPham(item.id)}>Xóa</button></td>
                </tr>
            )
        })
        console.log(this.props.danhMucSanPham)

        return (
            <div>
                <Sreach />
                <table className="table">

                    <th>
                        <tr>
                            <td>STT</td>
                            <td>Tên danh mục</td>
                            <td>Icon</td>
                            <td>Thao tác</td>
                        </tr>
                        {/* {this.state.keyWord ? eleSreachSanPham : eleSanPham} */}
                    </th>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    danhMucSanPham: state.productReducers.danhMucSanPham
})
export default connect(mapStateToProps)(index);
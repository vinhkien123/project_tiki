import React, { Component } from 'react';
import { connect, shallowEqual } from 'react-redux'
import { DanhSachSanPham } from '../../../../Redux/Action/product';
import productsServices from '../../../../Services/products';
import Swal from 'sweetalert2'
import { ProductsService } from '../../../../Services';
import { NavLink } from 'react-router-dom';

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            danhSachTimKiem: [],
            keyWord: ""
        }
    }
    componentDidMount() {
        this.props.dispatch(DanhSachSanPham())
    }
    onChange = (e) => {


        this.setState({
            [e.target.name]: e.target.value,
        }, () => {

            let danhSachTimKiem = this.props.danhSachSanPham.filter(item =>
                item.tenSanPham.toLowerCase().indexOf(this.state.keyWord) != -1
            )
            this.setState({
                danhSachTimKiem,

            })
        })

    }
    xoaSanPham = (id) => {
        ProductsService.xoaSanPham(id).then(res => {
            console.log(res.data);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Xóa thành công ! ',
                showConfirmButton: false,
                timer: 1200
            });
            this.props.history.push("/admin")
        }).catch(err => {
            console.log(err);
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Xóa thất bại ! ',
                showConfirmButton: false,
                timer: 1200
            });
        })
    }
    renderSanPham = (item, index) => {
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.tenSanPham}</td>
                <td><img src={item.img} alt="" /></td>
                <td>{item.giaSanPham} Đồng</td>
                <td><button className="btn btn-danger" onClick={()=>this.xoaSanPham(item.id)}>Xóa</button></td>
            </tr>
        )
    }
    render() {
        const eleSanPham = this.props.danhSachSanPham.map((item, index) => {
            return this.renderSanPham(item, index)
        })
        const eleSreachSanPham = this.state.danhSachTimKiem.map((item, index) => {
            return this.renderSanPham(item, index)

        })
        return (
            <div>
                <form>
                    <div className="form-group row">
                        <div className="col-10">
                            <input onChange={this.onChange} name="keyWord" type="text" className="form-control" placeholder="Nhập vào tên hoặc sản phẩm cần tìm ..." />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-success">Tìm</button>
                        </div>
                    </div>
                </form>
                <NavLink to="./themsanpham" className="btn btn-success my-2">Thêm sản phẩm</NavLink>

                <table className="table">
                    
                    <th>
                        <tr>
                            <td>STT</td>
                            <td>Tên Sản Phẩm</td>
                            <td>Hình ảnh</td>
                            <td>Giá Sản Phẩm</td>
                            <td>Thao tác</td>
                        </tr>
                        {this.state.keyWord ? eleSreachSanPham : eleSanPham}
                    </th>
                    <tbody>

                    </tbody>
                </table>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    danhSachSanPham: state.productReducers.danhSachSanPham

})
export default connect(mapStateToProps)(index);
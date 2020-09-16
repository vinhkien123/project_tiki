import React, { Component } from 'react';
import { connect, shallowEqual } from 'react-redux'
import { DanhSachSanPham } from '../../../../Redux/Action/product';
import productsServices from '../../../../Services/products';
import Swal from 'sweetalert2'
import { ProductsService } from '../../../../Services';
import { NavLink } from 'react-router-dom';
import Sreach from '../Sreach'
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            danhSachTimKiem: [],
            keyWord: "",
            flag : false,
            radio : "",
            
        }
    }
    componentDidMount() {
        this.props.dispatch(DanhSachSanPham())
    }
    xoaNhieuSanPham = () =>{
        this.setState({flag : true})
    }
    onChange = (e) => {


        this.setState({
            [e.target.name]: e.target.value,
        }, () => {

            let danhSachTimKiem = this.props.danhSachSanPham.filter(item =>
                item.Name?.toLowerCase().indexOf(this.state.keyWord) != -1
            )
            this.setState({
                danhSachTimKiem,

            })
        })

    }
    xoaSanPham = (id) => {
        ProductsService.xoaSanPham(id).then(res => {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Xóa thành công",
                showConfirmButton: false,
                timer: 1200
            });
            this.props.history.push('/admin')
            
        }).catch(err => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: err.response.data.message,
                showConfirmButton: false,
                timer: 1200
            });
        })
    }
    // onChange = (e)=>{
    //     this.setState({
    //         [e.input.name] : e.input.value
    //     },()=>{
    //     })
    // }
    renderSanPham = (item, index) => {
        console.log(item,"TEST");
        
        return (
            <tr key={index}>
                {/* <input type="radio" onChange={this.onChange} name="radio"/> */}
                <td>{index + 1}</td>
                <td>{item.Name?.length > 44 ? item.Name?.slice(0, 44) + "...." : item.Name}</td>
                <td><img src={item.Image} alt=""/> </td>
                <td>{item.Price} Đồng</td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.xoaSanPham(item._id)}>Xóa</button>
                    <NavLink to={`/admin/suasanpham/${item._id}`} className="btn btn-warning ml-2">Sửa</NavLink>
                </td>
            </tr>
        )
    }
    render() {
        const eleSanPham = this.props.danhSachSanPham?.map((item, index) => {
            return this.renderSanPham(item, index)
        })
        const eleSreachSanPham = this.state.danhSachTimKiem.map((item, index) => {
            return this.renderSanPham(item, index)

        })
        return (
            <div>
                <form>
                    <Sreach/>
                </form>
                <NavLink to="./themsanpham" className="btn btn-success my-2">Thêm sản phẩm</NavLink>
                <button className="btn btn-danger" name="detele">
                    Xóa nhiều sản phẩm
                </button>
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
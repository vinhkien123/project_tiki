import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import DanhSachSanPham from './Component/DanhSachSanPham'
import Component from './Component'
import ThemSanPham from './Component/Admin/Page/SanPham/ThemSanPham'
import {
  BrowserRouter, Route, Switch, useLocation,
  withRouter
} from 'react-router-dom'
import { AdminTemplate } from './Template/AdminTemplate';
import SanPham from './Component/Admin/Page/SanPham'
import { HomeTemplate } from './Template/HomeTemplate';
import ChiTietSanPham from './Component/ChiTietSanPham'
import HomeMovie from './Component/Screens/Movie'
import Test from './Component/Test/Content'
import ThemPhim from './Component/Admin/Page/ThemPhim'
import Admin from './Component/Admin'
import DanhSachPhim from './Component/Admin/Page/Phim';
import ChiTietPhim from './Component/ChiTietPhim'
import GioHang from './Component/GioHang';
import PageSanPham from './Component/Screens/SanPham';
import KhuyenMai from './Component/Screens/KhuyenMaiHot';
import SuaSanPham from './Component/Admin/Page/SanPham/SuaSanPham';
import DanhSachUser from './Component/Admin/Page/DanhSachUser'
import EditUser from './Component/EditUser'
import DangKyBanHang from './Component/AdminBanHang/FormDangKy'
import TrangChuAdmin from './Component/AdminBanHang'
import { AdminBanHangTemplate } from './Template/AdminBanHangTemplate/index';
import { UserTemplate } from './Template/UserTemplate';
import ScrollToTop from './Component/ScrollToTop'
import User from './Component/EditUser/ThongTinTaiKhoan';
import { connect } from 'react-redux'
import { DanhMucSanPham } from './Redux/Action/product';
import DanhSachDanhMucSanPham from './Component/Admin/Page/DanhSachDanhMuc';
import {ThongTinTaiKhoan} from './Redux/Action/user';
import { LayDanhSachGioHangUser } from './Redux/Action/shopingcart';
import ThanhToan from './Component/GioHang/ThanhToan'
import AddDiaChi from './Component/EditUser/DiaChi'
import Oder from './Component/GioHang/Oder'
class App extends Component {
  render() {
    return (
      <>
        <ScrollToTop >
          <Switch>
            <HomeTemplate path="/test" exact Component={Test} />

            <HomeTemplate path="/" exact Component={Component} />

            <HomeTemplate path="/chitietsanpham/:id" exact Component={ChiTietSanPham} />
            <HomeTemplate path="/movie" exact Component={HomeMovie} />

            <HomeTemplate path="/movie/chitietphim/:id" exact Component={ChiTietPhim} />
            <HomeTemplate path="/giohang" exact Component={GioHang} />
            <HomeTemplate path="/sanpham" exact Component={PageSanPham} />
            <HomeTemplate path="/sanpham/:title" exact Component={PageSanPham} />
            <HomeTemplate path="/khuyenmai" exact Component={KhuyenMai} />
            <Route path ="/checkout/oder" exact component={Oder}/>
            <Route path="/dangkybanhang" exact component={DangKyBanHang} />
            <Route path="/checkout/thanhtoan" exact component={ThanhToan} />
            <UserTemplate path="/user" exact Component={User} />
            <UserTemplate path="/diachi" exact Component={AddDiaChi}/>
            <HomeTemplate path="/test" exact Component={Test} />
            <AdminTemplate path="/admin/themsanpham" exact Component={ThemSanPham} />
            <AdminTemplate path="/admin/suasanpham/:id" Component={SuaSanPham} />
            <AdminTemplate path="/admin/danhsachuser" Component={DanhSachUser} />
            <AdminBanHangTemplate path="/adminbanhang/trangchu" exact Component={TrangChuAdmin} />
            <AdminTemplate path="/admin/themphim" Component={ThemPhim} />
            <AdminTemplate path="/admin" exact Component={Admin} />
            <AdminTemplate path="/admin/danhsachphim" exact Component={DanhSachPhim} />
            <AdminTemplate path="/admin/danhsachsanpham" exact Component={SanPham} />
            <AdminTemplate path="/admin/danhsachdanhmuc" exact Component={DanhSachDanhMucSanPham} />

          </Switch>
        </ScrollToTop>
      </>

    );
  }
  componentDidMount() {
    this.props.dispatch(DanhMucSanPham())
    let user = localStorage.getItem("user")
    if (user) {
      let userObj = JSON.parse(user)
    console.log("userrr",userObj);

      this.props.dispatch(ThongTinTaiKhoan(userObj?.token))
      this.props.dispatch(LayDanhSachGioHangUser(userObj?.user.id))
      

    }
  }
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps)(App);
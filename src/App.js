import React from 'react';
import logo from './logo.svg';
import './App.css';
import DanhSachSanPham from './Component/DanhSachSanPham'
import Component from './Component'
import ThemSanPham from './Component/Admin/Page/ThemSanPham'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AdminTemplate } from './Template/AdminTemplate';
import SanPham from './Component/Admin/Page/SanPham'
import { HomeTemplate } from './Template/HomeTemplate';
import ChiTietSanPham from './Component/ChiTietSanPham'
import HomeMovie from './Component/Screens/Movie'
import Test from './Component/Test'
import ThemPhim from './Component/Admin/Page/ThemPhim'
import Admin from './Component/Admin'
import DanhSachPhim from './Component/Admin/Page/Phim';
import ChiTietPhim from './Component/ChiTietPhim'
import GioHang from './Component/GioHang';
import PageSanPham from './Component/Screens/SanPham';

function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <>
          
          {/* <HomeTemplate path="/test" exact Component={Test} /> */}
          <HomeTemplate path="/" exact Component={Component} />
          <AdminTemplate path="/admin/themsanpham" exact Component={ThemSanPham} />
          <AdminTemplate path="/admin/danhsachsanpham" exact Component={SanPham} />
          <HomeTemplate path="/chitietsanpham/:id" exact Component={ChiTietSanPham} />
          <HomeTemplate path="/movie" exact Component={HomeMovie} />
          <AdminTemplate path="/admin/themphim" Component={ThemPhim}/>
          <AdminTemplate path="/admin" exact Component={Admin}/>
          <AdminTemplate path="/admin/danhsachphim" exact Component={DanhSachPhim}/>
          <HomeTemplate path="/movie/chitietphim/:id" exact Component={ChiTietPhim}/>
          <HomeTemplate path="/giohang" exact Component={GioHang}/>
          <HomeTemplate path="/test" exact Component={Test}/>
          <HomeTemplate path="/sanpham" exact Component={PageSanPham}/>

          
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

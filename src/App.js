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
function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <>
          
          {/* <HomeTemplate path="/test" exact Component={Test} /> */}
          <HomeTemplate path="/" exact Component={Component} />
          <AdminTemplate path="/admin/themsanpham" exact Component={ThemSanPham} />
          <AdminTemplate path="/admin" exact Component={SanPham} />
          <HomeTemplate path="/chitietsanpham/:id" exact Component={ChiTietSanPham} />
          <HomeTemplate path="/movie" exact Component={HomeMovie} />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

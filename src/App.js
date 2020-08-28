import React from 'react';
import logo from './logo.svg';
import './App.css';
import DanhSachSanPham from './Component/DanhSachSanPham'
import Component from './Component'
import ThemSanPham from './Component/Admin/Page/ThemSanPham'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AdminTemplate } from './Template/AdminTemplate';
import SanPham from './Component/Admin/Page/SanPham'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route path="/" exact component={Component} />
          <AdminTemplate path="/admin/themsanpham" exact Component={ThemSanPham}/>
          <AdminTemplate path="/admin" exact Component={SanPham}/>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

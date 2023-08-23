import React from 'react'
import Adminbar from './Components/Adminbar'
import Sidebar from './Components/SideBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Brands from './Pages/Brands'
import Category from './Pages/Category';
import Orders from './Pages/Orders'
import Products from './Pages/Products';

export default function Admin() {
  return (
    <Router>
      <Adminbar/>
      <div className="row ">
        <div className="col-md-3 bg-black">
          <Sidebar/>
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/category" element={<Category />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
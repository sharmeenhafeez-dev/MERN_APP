import React from 'react';
import Userbar from './Components/Userbar';
import Brands from './Pages/Brands';
import Category from './Pages/Category';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductsByBrand from './Pages/ProductsByBrand';
import Profile from './Pages/Profile';
import ProductsByCategory from './Pages/ProductsByCategory';
import ProductPage from './Pages/ProductPage'

import CartPage from './Pages/CartPage';
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Components/Footer';

export default function User() {
    return (
        <Router>
            <>
                <Userbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/brands" element={<Brands />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/brands/:BrandName" element={<ProductsByBrand />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:_id" element={<ProductPage />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/category/:CategoryName" element={<ProductsByCategory />} />
                    <Route path="*" element={<Navigate to="/" replace={true} />} />
                </Routes>
                <Footer/>
            </>
        </Router>
    );
}

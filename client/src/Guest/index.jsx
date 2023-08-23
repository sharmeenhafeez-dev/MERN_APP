import React, { useContext } from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Guestbar from './Components/Guestbar';
import Home from './Pages/Home';
import Brands from './Pages/Brands';
import Category from './Pages/Category';
import ProductsByCategory from './Pages/ProductsByCategory';
import Products from './Pages/Products';
import ProductPage from './Pages/ProductPage';
import ProductsByBrand from './Pages/ProductsByBrand';
// import CartPage from '../User/Pages/CartPage';
import { GlobalContext } from '../Admin/Context/context';
import Footer from '../Components/Footer';

export default function Guest() {
    const { state } = useContext(GlobalContext);

    // const PrivateRoute = ({ path, element }) => {
    //     if (state.isAuthenticated) {
    //         return <Route path={path} element={element} />;
    //     } else {
          
    //         return <Navigate to="/login" replace={true} />;
    //     }
    // };

    return (
        <Router>
            <>
                <Guestbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/brands" element={<Brands />} />
                    <Route path="/brands/:BrandName" element={<ProductsByBrand />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:_id" element={<ProductPage />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/category/:CategoryName" element={<ProductsByCategory />} />

                  
                    {/* <Route path="/cart" element={<PrivateRoute path="/cart" element={<CartPage />} />} /> */}

                    <Route path="*" element={<Navigate to="/login" replace={true} />} />
                </Routes>
                <Footer/>
            </>
        </Router>
    );
}

import React from 'react';
import './App.css';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import { CompareProduct } from './pages/CompareProduct';
import WishList from './pages/WishList';
import LogInPage from './pages/LogInPage';
import SignUp from './pages/SignUp';
import ForgotPassward from './pages/ForgotPassward';
import ResetPassward from './pages/ResetPassward';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='product' element={<OurStore/>} />
        <Route path='product/:id' element={<SingleProduct/>}/>
        <Route path='blogs' element={<Blog/>} />
        <Route path='blog/:id' element={<SingleBlog/>} />
        <Route path='compareProduct' element={<CompareProduct/>}/>
        <Route path='wishlist' element={<WishList/>}/>
        <Route path='login' element={<LogInPage/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='forgot-passward' element={<ForgotPassward/>}/>
        <Route path='reset-passward' element={<ResetPassward/>}/>
        <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='shipping-policy' element={<ShippingPolicy/>}/>
        <Route path='refund-policy' element={<RefundPolicy/>}/>
        <Route path='terms-and-conditions' element={<TermsAndCondition/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<CheckOut/>}/>

        </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

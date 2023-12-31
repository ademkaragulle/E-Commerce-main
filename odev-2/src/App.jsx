import { useState } from 'react'
import './App.css'
import Home from './pages/home-page/Home'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import AboutUs from './pages/about-us-page/AboutUs'
import ContackUs from './pages/contact-us-page/ContackUs'
import Cart from './pages/cart-page/Cart'
import Wishling from './pages/wishling-page/Wishling'
import Checkout from './pages/checkout-page/Checkout'
import Ordertracking from './pages/order-tracking-page/Ordertracking'
import ProductDetail from './pages/product-detail-page/ProductDetail'
import Blog from './pages/blog-two-cloums-page/Blog'
import BlogDetail from './pages/blog-detail-page/BlogDetail'

function App() {

    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about-us' element={<AboutUs />} />
                <Route path='contack-us' element={<ContackUs />} />
                <Route path='blog' element={<Blog />} />
                <Route path='blog-detail/:slug' element={<BlogDetail />} />
                <Route path='cart' element={<Cart />} />
                <Route path='wishling' element={<Wishling />} />
                <Route path='checkout' element={<Checkout />} />
                <Route path='order-tracking' element={<Ordertracking />} />
                <Route path='product-detail/:slug' element={<ProductDetail />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App

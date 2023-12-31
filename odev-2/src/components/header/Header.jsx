import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../../store/slices/cartSlice'

function Header() {
    const dispatch = useDispatch()

    const { cart, favoriteItems } = useSelector((store) => {
        return {
            cart: store.cart.items,
            favoriteItems: store.favorite.favoriteItems
        }
    })


    const totalAmount = () => {
        let total = 0
        cart.forEach(element => {
            total += element.price * element.quantity
        });
        return total
    }


    return (
        <div style={{ position: "absolute", width: "100%", zIndex: "20" }} className="header-navigation-area header-navigation-area--extra-space d-none d-lg-block">
            <div className="container wide">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-info-wrapper header-info-wrapper--alt-style">
                            <div className="header-logo">
                                <Link to={"/"}>
                                    <img src="src/assets/img/logo.png" className="img-fluid" alt="" />
                                    <img src="src/assets/img/logo-alt.png" className="img-fluid" alt="" />
                                </Link>
                            </div>
                            <div className="header-navigation-wrapper">
                                <nav>
                                    <ul>
                                        <li className="has-children">
                                            <Link to="/" >HOME</Link>
                                        </li>
                                        <li className="has-children">
                                            <a >PAGE</a>
                                            <ul className="submenu submenu--column-1">
                                                <li>
                                                    <Link to="/about-us" >About Us</Link>
                                                </li>
                                                <li>
                                                    <Link to="/contack-us" >Contact Us</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link to={"/blog"}>BLOG</Link>
                                        </li>
                                        <li className="has-children">
                                            <Link to="/order-tracking">Search Order</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-icon-area">
                                <div className="account-dropdown">
                                    <a >
                                        Login / Register <i className="pe-7s-angle-down" />
                                    </a>

                                </div>
                                <div className="header-icon d-flex align-items-center">
                                    <ul className="header-icon__list">
                                        <li>
                                            <a id="search-icon">
                                                <i className="fa fa-search" />
                                            </a>
                                        </li>
                                        <li>
                                            <Link to={"/wishling"}>
                                                <i className="fa fa-heart-o" />
                                                {favoriteItems && favoriteItems.length > 0 && <span className="item-count">{favoriteItems.length}</span>}

                                            </Link>
                                            <div className="minicart-wrapper">
                                                <p className="minicart-wrapper__title">WISHLIST</p>
                                                <div className="minicart-wrapper__items ps-scroll">
                                                    {
                                                        favoriteItems && favoriteItems.map((item, index) => (
                                                            <div key={index} className="minicart-wrapper__items__single">
                                                                <div onClick={() => dispatch(removeFromCart((item.id)))} style={{ cursor: "pointer" }} className="close-icon">
                                                                    <i className="pe-7s-close" />
                                                                </div>
                                                                <div className="image">
                                                                    <a href="product-details-basic.html">
                                                                        <img
                                                                            style={{ width: "90px" }}
                                                                            src={`../../` + item.img[0]}
                                                                            className="img-fluid"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </div>
                                                                <div className="content">
                                                                    <p className="product-title">
                                                                        <a href="product-details-basic.html">
                                                                            {item.name}
                                                                        </a>
                                                                    </p>
                                                                    <p className="product-calculation">
                                                                        <span className="count">{item.quantity}</span> x{" "}
                                                                        <span className="price">${item.price}</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <div className="minicart-wrapper__buttons mb-0">
                                                    <Link to={"/wishling"}
                                                        className="theme-button theme-button--minicart-button mb-0"
                                                    >
                                                        VIEW WISHLIST
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to={"/cart"}>
                                                <i className="fa fa-shopping-basket" />
                                                {cart.length > 0 && <span className="item-count">{cart.length}</span>}
                                            </Link>
                                            <div className="minicart-wrapper">
                                                <p className="minicart-wrapper__title">CART</p>
                                                <div className="minicart-wrapper__items ps-scroll">


                                                    {
                                                        cart && cart.map((item, index) => (
                                                            <div key={index} className="minicart-wrapper__items__single">
                                                                <div onClick={() => dispatch(removeFromCart((item.id)))} style={{ cursor: "pointer" }} className="close-icon">
                                                                    <i className="pe-7s-close" />
                                                                </div>
                                                                <div className="image">
                                                                    <a href="product-details-basic.html">
                                                                        <img
                                                                            style={{ width: "90px" }}
                                                                            src={item.img[0]}
                                                                            className="img-fluid"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                </div>
                                                                <div className="content">
                                                                    <p className="product-title">
                                                                        <a href="product-details-basic.html">
                                                                            {item.name}
                                                                        </a>
                                                                    </p>
                                                                    <p className="product-calculation">
                                                                        <span className="count">{item.quantity}</span> x{" "}
                                                                        <span className="price">${item.price}</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }




                                                </div>
                                                <p className="minicart-wrapper__subtotal">
                                                    SUBTOTAL: <span>${totalAmount()}</span>
                                                </p>
                                                <div className="minicart-wrapper__buttons">
                                                    <Link
                                                        to={"/cart"}
                                                        className="theme-button theme-button--minicart-button"
                                                    >
                                                        VIEW CART
                                                    </Link>
                                                    <Link
                                                        to={"/checkout"}
                                                        className="theme-button theme-button--alt theme-button--minicart-button theme-button--minicart-button--alt mb-0"
                                                    >
                                                        CHECKOUT
                                                    </Link>
                                                </div>
                                                <p className="minicart-wrapper__featuretext">
                                                    Free Shipping on All Orders Over $100!
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
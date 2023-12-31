import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../../store/slices/cartSlice'

function Cart() {

    const { cartItems } = useSelector((store) => {
        return {
            cartItems: store.cart.items
        }
    })
    const dispatch = useDispatch()

    const calculateTotalPrice = () => {
        let total = 0
        cartItems.forEach(element => {
            total += element.price * element.quantity
        });
        return total
    }



    return (
        <div>
            {/*====================  breadcrumb area ====================*/}
            <div className="breadcrumb-area section-space--breadcrumb">
                <div className="container">
                    <div style={{ paddingTop: "100px" }} className="row">
                        <div className="col-lg-6 offset-lg-3">
                            {/*=======  breadcrumb wrapper  =======*/}
                            <div className="breadcrumb-wrapper">
                                <h2 className="page-title">Shopping Cart</h2>
                                <ul className="breadcrumb-list">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="active">Shopping Cart</li>
                                </ul>
                            </div>
                            {/*=======  End of breadcrumb wrapper  =======*/}
                        </div>
                    </div>
                </div>
            </div>
            {/*====================  End of breadcrumb area  ====================*/}
            {/*====================  page content wrapper ====================*/}
            <div className="page-content-wrapper">
                {/*=======  shopping cart wrapper  =======*/}
                <div className="shopping-cart-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/*=======  cart table  =======*/}
                                <div className="cart-table-container">
                                    <table className="cart-table">
                                        <thead>
                                            <tr>
                                                <th className="product-name" colSpan={2}>
                                                    Product
                                                </th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                cartItems && cartItems.map((item) => (
                                                    <tr>
                                                        <td className="product-thumbnail">
                                                            <a href="product-details-basic.html">
                                                                <img
                                                                    src={item.img[0]}
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </td>
                                                        <td className="product-name">
                                                            <a href="product-details-basic.html">
                                                                {item.name}
                                                            </a>
                                                            <span className="product-variation">Color: Black</span>
                                                        </td>
                                                        <td className="product-price">
                                                            <span className="price">${item.price}</span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <div className="pro-qty d-inline-block mx-0">
                                                                <input type="text" value={item.quantity} />
                                                            </div>
                                                        </td>
                                                        <td className="total-price">
                                                            <span className="price">${item.quantity * item.price}</span>
                                                        </td>
                                                        <td className="product-remove">
                                                            <a onClick={() => dispatch(removeFromCart(item.id))}>
                                                                <i className="pe-7s-close" />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                {/*=======  End of cart table  =======*/}
                            </div>
                            <div className="col-lg-12">
                                {/*=======  coupon area  =======*/}
                                <div className="cart-coupon-area">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            {/*=======  coupon form  =======*/}
                                            <div className="coupon-form">
                                                <form action="#">
                                                    <div className="row row-5">
                                                        <div className="col-md-7 col-sm-7">
                                                            <input
                                                                type="text"
                                                                placeholder="Enter your coupon code"
                                                            />
                                                        </div>
                                                        <div className="col-md-5 col-sm-5">
                                                            <button className="theme-button theme-button--silver">
                                                                APPLY COUPON
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/*=======  End of coupon form  =======*/}
                                        </div>
                                        <div className="col-lg-6 text-start text-lg-end">
                                            {/*=======  update cart button  =======*/}
                                            <button className="theme-button">UPDATE CART</button>
                                            {/*=======  End of update cart button  =======*/}
                                        </div>
                                    </div>
                                </div>
                                {/*=======  End of coupon area  =======*/}
                            </div>
                            <div className="col-lg-6 offset-lg-6">
                                <div className="cart-calculation-area">
                                    <h2 className="cart-calculation-area__title">Cart totals</h2>
                                    <table className="cart-calculation-table">
                                        <tbody>
                                            <tr>
                                                <th>SUBTOTAL</th>
                                                <td className="subtotal">${calculateTotalPrice()}</td>
                                            </tr>
                                            <tr>
                                                <th>DİSCOUNT</th>
                                                <td className="total">-${Math.round(calculateTotalPrice() * 0.17)}</td>
                                            </tr>
                                            <tr>
                                                <th>TOTAL</th>
                                                <td className="total">${Math.round(calculateTotalPrice() * 0.83)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="cart-calculation-button">
                                        <Link to={"/checkout"} className="theme-button theme-button--alt theme-button--checkout">
                                            PROCEED TO CHECKOUT
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*=======  End of shopping cart wrapper  =======*/}
            </div>
            {/*====================  End of page content wrapper  ====================*/}
        </div>
    )
}

export default Cart
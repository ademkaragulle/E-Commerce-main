import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Ordertracking() {
    const [orderId, setOrderId] = useState("")
    const [orderEmail, setOrderEmail] = useState("")
    const [orderItems, setOrderItems] = useState()



    const listOrders = async () => {
        const response = await axios.get(`http://localhost:3000/orders`)
        const data = await response.data
        const order = data.find((x) => x.orderId == orderId && x.email == orderEmail)

        if (orderId && orderEmail) {
            if (order) {
                setOrderItems(order.cart)
            }
            else {
                alert("ürün bulunamadı")
            }
        }
        else {
            alert("Lütfen gerekli alanları doldurunuz.")
        }

    }

    return (
        <div>
            <div className="breadcrumb-area section-space--breadcrumb">
                <div className="container">
                    <div style={{ paddingTop: "100px" }} className="row">
                        <div className="col-lg-6 offset-lg-3">
                            {/*=======  breadcrumb wrapper  =======*/}
                            <div className="breadcrumb-wrapper">
                                <h2 className="page-title">Order Tracking</h2>
                                <ul className="breadcrumb-list">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="active">Order Tracking</li>
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
                <div className="order-tracking-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/*=======  order tracking wrapper  =======*/}
                                <div className="order-tracking-wrapper">
                                    {/*=======  order track form  =======*/}
                                    <div className="order-track-form">
                                        <p>
                                            To track your order please enter your Order ID in the box
                                            below and press the "Track" button. This was given to you on
                                            your receipt and in the confirmation email you should have
                                            received.
                                        </p>
                                        <div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <label htmlFor="orderId">Order ID</label>
                                                    <input
                                                        onChange={e => setOrderId(e.target.value)}
                                                        value={orderId && orderId}
                                                        type="text"
                                                        placeholder="Found in your order confirmation email"
                                                    />
                                                </div>
                                                <div className="col-lg-12">
                                                    <label htmlFor="orderEmail">Billing email</label>
                                                    <input
                                                        onChange={e => setOrderEmail(e.target.value)}
                                                        value={orderEmail && orderEmail}
                                                        type="text"
                                                        placeholder="Email you used during checkout"
                                                    />
                                                </div>
                                                <div className="col-lg-12 text-center">
                                                    <button onClick={() => listOrders()} className="theme-button theme-button--order-track">
                                                        TRACK
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*=======  End of order track form  =======*/}
                                </div>
                                {/*=======  End of order tracking wrapper  =======*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                orderItems && <div>
                    <div className="page-content-wrapper">
                        {/*=======  shopping cart wrapper  =======*/}
                        <div className="shopping-cart-area">
                            <div className="container">
                                <div className="row"></div>
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
                                                    orderItems && orderItems.map((item, index) => (
                                                        <tr key={index}>
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
                                                                <div className='btn btn-primary' >
                                                                    Cancel Order
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    {/*=======  End of cart table  =======*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div >
    )
}

export default Ordertracking
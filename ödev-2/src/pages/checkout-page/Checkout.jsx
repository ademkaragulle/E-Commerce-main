import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart } from '../../store/slices/cartSlice'
import { v4 as uuid } from "uuid";


function Checkout() {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [companyName, setCompanyName] = useState()
    const [address1, setAddress1] = useState()
    const [address2, setAddress2] = useState()
    const [country, setCountry] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [zipCode, setZipCode] = useState()
    const [orderId, setOrderId] = useState()


    const { cart } = useSelector((store) => {
        return {
            cart: store.cart.items
        }
    })


    const calculateTotalPrice = () => {
        let total = 0
        cart.forEach(element => {
            total += element.price * element.quantity
        });
        return total
    }

    const dispatch = useDispatch()
    const addToOrder = () => {
        let order
        if (cart) {
            order = {
                orderId: uuid().slice(0, 13),
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                companyName: companyName,
                address1: address1,
                address2: address2,
                country: country,
                city: city,
                state: state,
                zipCode: zipCode,
                cart: cart,
            }
            axios.post('http://localhost:3000/orders', order)
                .catch(error => {
                    console.error('İstek hatası:', error);
                });
            setFirstName("")
            setLastName("")
            setEmail("")
            setPhone("")
            setCompanyName("")
            setAddress1("")
            setAddress2("")
            setCountry("")
            setCity("")
            setState("")
            setZipCode("")
            dispatch(clearCart())
            setOrderId(order.orderId)
        }
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
                                <h2 className="page-title">Checkout</h2>
                                <ul className="breadcrumb-list">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="active">Checkout</li>
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
                {/*=======  checkout page wrapper  =======*/}
                <div className="checkout-page-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="checkout-form">
                                    {/* Checkout Form s*/}
                                    <div >
                                        <div className="row row-40">
                                            <div className="col-lg-7">
                                                {/* Billing Address */}
                                                <div id="billing-form" className="billing-form">
                                                    <h4 className="checkout-title">Billing Address</h4>
                                                    <div className="row">
                                                        <div className="col-md-6 col-12">
                                                            <label>First Name*</label>
                                                            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                                                        </div>
                                                        <div className="col-md-6 col-12">
                                                            <label>Last Name*</label>
                                                            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                                                        </div>
                                                        <div className="col-md-6 col-12">
                                                            <label>Email Address*</label>
                                                            <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} />
                                                        </div>
                                                        <div className="col-md-6 col-12">
                                                            <label>Phone no*</label>
                                                            <input type="text" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} value={phone} />
                                                        </div>
                                                        <div className="col-12">
                                                            <label>Company Name</label>
                                                            <input type="text" placeholder="Company Name" onChange={(e) => setCompanyName(e.target.value)} value={companyName} />
                                                        </div>
                                                        <div className="col-12">
                                                            <label>Address*</label>
                                                            <input type="text" placeholder="Address line 1" onChange={(e) => setAddress1(e.target.value)} value={address1} />
                                                            <input type="text" placeholder="Address line 2" onChange={(e) => setAddress2(e.target.value)} value={address2} />
                                                        </div>
                                                        <div className="col-md-6 col-12">
                                                            <label>Country*</label>
                                                            <select className="nice-select" onChange={e => setCountry(e.target.value)} value={country}>
                                                                <option>Bangladesh</option>
                                                                <option>China</option>
                                                                <option>country</option>
                                                                <option>India</option>
                                                                <option>Japan</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-12">
                                                            <label>Town/City*</label>
                                                            <input type="text" placeholder="Town/City" onChange={(e) => setCity(e.target.value)} value={city} />
                                                        </div>
                                                        <div className="col-md-6 col-12">
                                                            <label>State*</label>
                                                            <input type="text" placeholder="State" onChange={(e) => setState(e.target.value)} value={state} />
                                                        </div>
                                                        <div className="col-md-6 col-12">
                                                            <label>Zip Code*</label>
                                                            <input type="text" placeholder="Zip Code" onChange={(e) => setZipCode(e.target.value)} value={zipCode} />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-lg-5">
                                                <div className="row">
                                                    {/* Cart Total */}
                                                    <div className="col-12">
                                                        <h4 className="checkout-title">Cart Total</h4>
                                                        <div className="checkout-cart-total">
                                                            <h4>
                                                                Product <span>Total</span>
                                                            </h4>
                                                            <ul>
                                                                {
                                                                    cart && cart.map((item) => (
                                                                        <li>
                                                                            {item.name} X {item.quantity} <span>${item.quantity * item.price}</span>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                            <p>
                                                                Sub Total <span>${calculateTotalPrice()}</span>
                                                            </p>
                                                            <p>
                                                                Shipping Fee <span>${Math.round(calculateTotalPrice() * 0.17)}</span>
                                                            </p>
                                                            <h4>
                                                                Grand Total <span>${Math.round(calculateTotalPrice() - calculateTotalPrice() * 0.17)}</span>
                                                            </h4>
                                                            <button onClick={() => addToOrder()} className="theme-button place-order-btn">
                                                                PLACE ORDER
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* style={{ display: "none" }} */}
                                                    {
                                                        orderId &&
                                                        <div style={{ backgroundColor: "#d1e7dd", padding: "20px" }} className="col-12 bg-success-subtle">
                                                            Order Success, Thank you for choosing us <br /> Order Id: {orderId}
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*=======  End of checkout page wrapper  =======*/}
            </div>
            {/*====================  End of page content wrapper  ====================*/}


        </div>
    )
}

export default Checkout
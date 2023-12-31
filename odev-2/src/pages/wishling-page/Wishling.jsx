import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/slices/cartSlice'
import { addToFavorite } from '../../store/slices/favoriteSlices'

function Wishling() {
    const [favoriteProduct, setFavoriteProduct] = useState([])
    const dispatch = useDispatch()
    const getFavorite = async () => {
        const response = await axios.get(`http://localhost:3000/favorites`)
        const data = await response.data
        setFavoriteProduct(data)
    }

    useEffect(() => {
        getFavorite()
    }, [favoriteProduct])


    const addCart = (product) => {
        dispatch(addToCart(product))
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
                                <h2 className="page-title">Wishlist</h2>
                                <ul className="breadcrumb-list">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="active">Wishlist</li>
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
                                                <th className="product-quantity">Stock Status</th>
                                                <th className="product-subtotal">&nbsp;</th>
                                                <th className="product-remove">&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>


                                            {
                                                favoriteProduct.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="product-thumbnail">
                                                            <Link to={`product-detail-${item.slug}`}>
                                                                <img
                                                                    src={item.img[0]}
                                                                    className="img-fluid"
                                                                    alt=""
                                                                />
                                                            </Link>
                                                        </td>
                                                        <td className="product-name">
                                                            <Link to={`product-detail-${item.slug}`}>
                                                                {item.name}
                                                            </Link>
                                                            <span className="product-variation">Color: Black</span>
                                                        </td>
                                                        <td className="product-price">
                                                            <span className="price">${item.price}</span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <div className="pro-qty d-inline-block mx-0">
                                                                <input type="text" defaultValue={1} />
                                                            </div>
                                                        </td>
                                                        <td className="stock-status">
                                                            <span className="stock-stat-message">IN STOCK</span>
                                                        </td>
                                                        <td className="add-to-cart">
                                                            <button onClick={() => addCart(item)} className="theme-button theme-button--alt theme-button--wishlist">
                                                                ADD TO CART
                                                            </button>
                                                        </td>
                                                        <td className="product-remove">
                                                            <a onClick={() => dispatch(addToFavorite(item))}>
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
                        </div>
                    </div>
                </div>
                {/*=======  End of shopping cart wrapper  =======*/}
            </div>
            {/*====================  End of page content wrapper  ====================*/}
        </div>
    )
}

export default Wishling
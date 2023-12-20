import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../../store/slices/cartSlice';
import { useDispatch } from 'react-redux';



function ProductDetail() {
    const [product, setProduct] = useState()
    const { slug } = useParams("slug");

    async function getProduct() {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        const data1 = await data.find(x => x.slug == slug)
        setProduct(data1)
    }

    useEffect(() => {
        getProduct()
    }, [slug])

    const dispatch = useDispatch()
    const addProduct = (item) => {
        dispatch(addToCart(item))
    }
    return (
        <div className="page-content-wrapper">
            <div className="breadcrumb-area section-space--breadcrumb">
                <div className="container">
                    <div style={{ paddingTop: "120px" }} className="row">
                        <div className="col-lg-6 offset-lg-3">
                            {/*=======  breadcrumb wrapper  =======*/}
                            <div className="breadcrumb-wrapper">
                                <h2 className="page-title">Shop</h2>
                                <ul className="breadcrumb-list">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="active">Shop product</li>
                                </ul>
                            </div>
                            {/*=======  End of breadcrumb wrapper  =======*/}
                        </div>
                    </div>
                </div>
            </div>

            {
                product &&
                <div className="single-product-slider-details-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                {/*=======  product details slider area  =======*/}
                                <div className="product-details-slider-area product-details-slider-area--side-move">
                                    <div className="product-badge-wrapper">
                                        <span className="hot">Hot</span>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col-md-9 order-1 order-md-2 position-relative">
                                            <div style={{ overflow: "hidden", height: "577px" }} className="big-image-wrapper">
                                                <div className="enlarge-icon">
                                                    <a
                                                        className="btn-zoom-popup"
                                                        href="javascript:void(0)"
                                                        data-tippy="Click to enlarge"
                                                        data-tippy-placement="left"
                                                        data-tippy-inertia="true"
                                                        data-tippy-animation="shift-away"
                                                        data-tippy-delay={50}
                                                        data-tippy-arrow="true"
                                                        data-tippy-theme="sharpborder"
                                                    >
                                                        <i className="pe-7s-expand1" />
                                                    </a>
                                                </div>
                                                <div style={{ overflow: "hidden" }}
                                                    className="product-details-big-image-slider-wrapper product-details-big-image-slider-wrapper--side-space theme-slick-slider"
                                                >
                                                    {
                                                        product && product.img.map((item, index) => (
                                                            <div key={index} className="single-image">
                                                                <img
                                                                    src={`/${item}`}
                                                                    className="img-fluid w-100"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 order-2 order-md-1 position-relative">
                                            <div
                                                className="product-details-small-image-slider-wrapper product-details-small-image-slider-wrapper--vertical-space theme-slick-slider"
                                                data-slick-setting='{
                                        "slidesToShow": 3,
                                        "slidesToScroll": 1,
                                        "centerMode": false,
                                        "arrows": true,
                                        "vertical": true,
                                        "autoplay": false,
                                        "autoplaySpeed": 5000,
                                        "speed": 500,
                                        "asNavFor": ".product-details-big-image-slider-wrapper",
                                        "focusOnSelect": true,
                                        "prevArrow": {"buttonClass": "slick-prev", "iconClass": "fa fa-angle-up" },
                                        "nextArrow": {"buttonClass": "slick-next", "iconClass": "fa fa-angle-down" }
                                    }'
                                                data-slick-responsive='[
                                        {"breakpoint":1501, "settings": {"slidesToShow": 3, "arrows": true} },
                                        {"breakpoint":1199, "settings": {"slidesToShow": 3, "arrows": true} },
                                        {"breakpoint":991, "settings": {"slidesToShow": 3, "arrows": true, "slidesToScroll": 1} },
                                        {"breakpoint":767, "settings": {"slidesToShow": 3, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} },
                                        {"breakpoint":575, "settings": {"slidesToShow": 3, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} },
                                        {"breakpoint":479, "settings": {"slidesToShow": 2, "arrows": false, "slidesToScroll": 1, "vertical": false, "centerMode": true} }
                                    ]'
                                            >
                                                {
                                                    product && product.img.map((item, index) => (
                                                        <div key={index} className="single-image">
                                                            <img
                                                                src={`/${item}`}
                                                                className="img-fluid w-100"
                                                                alt=""
                                                            />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*=======  End of product details slider area  =======*/}
                            </div>
                            <div className="col-lg-6">
                                {/*=======  product details description area  =======*/}
                                <div className="product-details-description-wrapper">
                                    <h2 className="item-title">{product.name}</h2>
                                    <p className="price">
                                        <span className="main-price discounted">${product.price}</span>
                                        <span className="discounted-price">${product.price * 0.83}</span>
                                    </p>
                                    <p className="description">
                                        Upholstered velvet ottoman with antique stud detailing. Invite
                                        restrained glamour and on-trend colour into your design scheme
                                        with the Eichholtz Ponti Ottoman. Inspired by the neo-classical
                                        influences of Italian icon, Gio Ponti, this contemporary ottoman
                                        collection is presented in a choice of velvet and linen
                                        colourways.
                                    </p>
                                    <div className="product-color">
                                        <span className="product-details-title">COLOR: </span>
                                        <ul>
                                            <li>
                                                <a
                                                    className="active"
                                                    href="#"
                                                    data-tippy="Black"
                                                    data-tippy-inertia="true"
                                                    data-tippy-animation="shift-away"
                                                    data-tippy-delay={50}
                                                    data-tippy-arrow="true"
                                                    data-tippy-theme="roundborder"
                                                >
                                                    <span className="color-picker black" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    data-tippy="Blue"
                                                    data-tippy-inertia="true"
                                                    data-tippy-animation="shift-away"
                                                    data-tippy-delay={50}
                                                    data-tippy-arrow="true"
                                                    data-tippy-theme="roundborder"
                                                >
                                                    <span className="color-picker blue" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    data-tippy="Brown"
                                                    data-tippy-inertia="true"
                                                    data-tippy-animation="shift-away"
                                                    data-tippy-delay={50}
                                                    data-tippy-arrow="true"
                                                    data-tippy-theme="roundborder"
                                                >
                                                    <span className="color-picker brown" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pro-qty d-inline-block">
                                        <input type="text" defaultValue={1} />
                                    </div>
                                    <div className="add-to-cart-btn d-inline-block">
                                        <button onClick={() => addProduct(product)} className="theme-button theme-button--alt">
                                            ADD TO CART
                                        </button>
                                    </div>
                                    <div className="quick-view-other-info">
                                        <div className="other-info-links">
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-heart-o" /> ADD TO WISHLIST
                                            </a>
                                            <a href="javascript:void(0)">
                                                <i className="fa fa-exchange" /> COMPARE
                                            </a>
                                        </div>
                                        <div className="product-brand">
                                            <a href="shop-left-sidebar.html">
                                                <img
                                                    src="assets/img/brands/brand-2.png"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <table>
                                            <tbody>
                                                <tr className="single-info">
                                                    <td className="quickview-title">Brand: </td>
                                                    <td className="quickview-value">BELLE NETWORK</td>
                                                </tr>
                                                <tr className="single-info">
                                                    <td className="quickview-title">SKU: </td>
                                                    <td className="quickview-value">12345</td>
                                                </tr>
                                                <tr className="single-info">
                                                    <td className="quickview-title">Categories: </td>
                                                    <td className="quickview-value">
                                                        <a href="#">Decor</a>,<a href="#">Living Room</a>,
                                                        <a href="#">Furniture</a>
                                                    </td>
                                                </tr>
                                                <tr className="single-info">
                                                    <td className="quickview-title">Tags: </td>
                                                    <td className="quickview-value">
                                                        <a href="#">Decor</a>,<a href="#">Light</a>
                                                    </td>
                                                </tr>
                                                <tr className="single-info">
                                                    <td className="quickview-title">Share on: </td>
                                                    <td className="quickview-value">
                                                        <ul className="quickview-social-icons">
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fa fa-facebook" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fa fa-twitter" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fa fa-google-plus" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <i className="fa fa-pinterest" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/*=======  End of product details description area  =======*/}
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/*=======  End of single product slider details area  =======*/}
        </div>

    )
}

export default ProductDetail
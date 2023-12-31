import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../store/slices/productSlice'
import { addToCart } from '../../../store/slices/cartSlice'
import { addToFavorite, getFavorite } from '../../../store/slices/favoriteSlices'

function Products() {
    const [favoriteDatas, setFavoriteDatas] = useState([])


    const { data, favoriteItems } = useSelector((store) => {
        return {
            data: store.products.data,
            favoriteItems: store.favorite.favoriteItems
        }
    })

    const [categoryId, setcategoryId] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFavorite())
        dispatch(fetchProducts(categoryId))
        setFavoriteDatas(favoriteItems)
    }, [dispatch, categoryId, favoriteItems])


    const addCart = (product) => {
        dispatch(addToCart(product))
    }

    const addfavorite = (product) => {
        dispatch(addToFavorite(product))
        dispatch(getFavorite())
    }


    const IsFavorite = (productId) => {
        if (!favoriteDatas) {
            return false
        }
        return favoriteDatas.find((x) => x.id == productId)
    }


    return (
        <div>


            <div className="product-double-row-tab-area section-space">
                <div className="container wide">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-double-row-tab-wrapper">
                                {/*=======  tab product navigation  =======*/}
                                <div className="tab-product-navigation">
                                    <ul
                                        className="nav nav-tabs justify-content-center"
                                        id="nav-tab2"
                                        role="tablist"
                                    >
                                        <li className="nav-item">
                                            <button
                                                onClick={() => setcategoryId(null)}
                                                className="nav-link active"
                                                id="product-tab-1"
                                                type="button"
                                                data-bs-toggle="tab"
                                                data-bs-target="#product-series-1"
                                                role="tab"
                                                aria-controls="product-series-1"
                                                aria-selected="true"
                                            >
                                                New Arrivals
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                onClick={() => setcategoryId(1)}
                                                className="nav-link"
                                                id="product-tab-2"
                                                type="button"
                                                data-bs-toggle="tab"
                                                data-bs-target="#product-series-2"
                                                role="tab"
                                                aria-controls="product-series-2"
                                                aria-selected="false"
                                            >
                                                Featured
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                onClick={() => setcategoryId(2)}
                                                className="nav-link"
                                                id="product-tab-3"
                                                type="button"
                                                data-bs-toggle="tab"
                                                data-bs-target="#product-series-3"
                                                role="tab"
                                                aria-controls="product-series-3"
                                                aria-selected="false"
                                            >
                                                On Sale
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                {/*=======  End of tab product navigation  =======*/}
                                {/*=======  tab product content  =======*/}
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="product-series-1"
                                        role="tabpanel"
                                        aria-labelledby="product-tab-1"
                                    >
                                        {/*=======  product row wrapper  =======*/}
                                        <div className="product-row-wrapper">
                                            <div className="row">
                                                {
                                                    data && data.map((product, index) =>
                                                    (
                                                        <div key={index} className="col-xl-custom-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-custom-sm-6">
                                                            <div className="single-grid-product">
                                                                <div className="single-grid-product__image">
                                                                    <div className="product-badge-wrapper">
                                                                        <span className="onsale">-17%</span>
                                                                        <span className="hot">Hot</span>
                                                                    </div>
                                                                    <Link
                                                                        to={`/product-detail/${product.slug}`}
                                                                        className="image-wrap"
                                                                    >
                                                                        {
                                                                            product.img.map((x, index2) => (
                                                                                index2 < 1 && <img
                                                                                    key={index2}
                                                                                    src={x}
                                                                                    className="img-fluid"
                                                                                    alt=""
                                                                                />
                                                                            ))
                                                                        }
                                                                    </Link>
                                                                    <div className="product-hover-icon-wrapper">
                                                                        <span className="single-icon single-icon--quick-view d-flex justify-content-center align-items-center">
                                                                            <div
                                                                                className="cd-trigger"

                                                                                data-tippy="Quick View"
                                                                                data-tippy-inertia="true"
                                                                                data-tippy-animation="shift-away"
                                                                                data-tippy-delay={50}
                                                                                data-tippy-arrow="true"
                                                                                data-tippy-theme="sharpborder"
                                                                            >
                                                                                <i className="fa fa-search" />
                                                                            </div>
                                                                        </span>
                                                                        <span onClick={() => addCart(product)} className=" btn rounded-0 single-icon single-icon--add-to-cart d-flex justify-content-center align-items-center">
                                                                            <div
                                                                                data-tippy="Add to cart"
                                                                                data-tippy-inertia="true"
                                                                                data-tippy-animation="shift-away"
                                                                                data-tippy-delay={50}
                                                                                data-tippy-arrow="true"
                                                                                data-tippy-theme="sharpborder"
                                                                            >
                                                                                <i className="fa fa-shopping-basket" />{" "}
                                                                                <span>ADD TO CART</span>
                                                                            </div>
                                                                        </span>
                                                                        <span className="single-icon single-icon--compare d-flex justify-content-center align-items-center">
                                                                            <div

                                                                                data-tippy="Compare"
                                                                                data-tippy-inertia="true"
                                                                                data-tippy-animation="shift-away"
                                                                                data-tippy-delay={50}
                                                                                data-tippy-arrow="true"
                                                                                data-tippy-theme="sharpborder"
                                                                            >
                                                                                <i className="fa fa-exchange" />
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="single-grid-product__content">
                                                                    <h3 className="title">
                                                                        <Link
                                                                            to={`product-details-${product.slug}`}
                                                                            className="image-wrap"
                                                                        >{product.name}</Link>
                                                                    </h3>
                                                                    <div className="price">
                                                                        <span className="main-price discounted">${product.price}</span>{" "}
                                                                        <span className="discounted-price">${Math.round(product.price - product.price * 0.17)}</span>
                                                                    </div>
                                                                    <div className="rating">
                                                                        <i className="fa fa-star active" />
                                                                        <i className="fa fa-star active" />
                                                                        <i className="fa fa-star active" />
                                                                        <i className="fa fa-star active" />
                                                                        <i className="fa fa-star" />
                                                                    </div>
                                                                    <div className="color">
                                                                        <ul>
                                                                            <li>
                                                                                <div
                                                                                    className="active"

                                                                                    data-tippy="Black"
                                                                                    data-tippy-inertia="true"
                                                                                    data-tippy-animation="shift-away"
                                                                                    data-tippy-delay={50}
                                                                                    data-tippy-arrow="true"
                                                                                    data-tippy-theme="roundborder"
                                                                                >
                                                                                    <span className="color-picker black" />
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div

                                                                                    data-tippy="Blue"
                                                                                    data-tippy-inertia="true"
                                                                                    data-tippy-animation="shift-away"
                                                                                    data-tippy-delay={50}
                                                                                    data-tippy-arrow="true"
                                                                                    data-tippy-theme="roundborder"
                                                                                >
                                                                                    <span className="color-picker blue" />
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div

                                                                                    data-tippy="Brown"
                                                                                    data-tippy-inertia="true"
                                                                                    data-tippy-animation="shift-away"
                                                                                    data-tippy-delay={50}
                                                                                    data-tippy-arrow="true"
                                                                                    data-tippy-theme="roundborder"
                                                                                >
                                                                                    <span className="color-picker brown" />
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div
                                                                        style={{ cursor: "pointer" }}
                                                                        onClick={() => addfavorite(product)}
                                                                        className="favorite-icon"
                                                                        data-tippy="Add to Wishlist"
                                                                        data-tippy-inertia="true"
                                                                        data-tippy-animation="shift-away"
                                                                        data-tippy-delay={50}
                                                                        data-tippy-arrow="true"
                                                                        data-tippy-theme="sharpborder"
                                                                        data-tippy-placement="left"
                                                                    >
                                                                        {!IsFavorite(product.id) && <i className="fa fa-heart-o" />}
                                                                        <i className="fa fa-heart" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*=======  End of single short view product  =======*/}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        {/*=======  End of product row wrapper  =======*/}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <a
                            className="theme-button theme-button--loadmore section-space--small-top"
                        >
                            LOAD MORE
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Products
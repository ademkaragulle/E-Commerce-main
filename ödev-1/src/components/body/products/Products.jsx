import React, { useEffect, useState } from 'react'
import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../store/slices/ProductSlice'
import { useSearchParams } from 'react-router-dom';
import { addToCart } from '../../store/slices/BasketSlice';
import { v4 as uuidv4 } from 'uuid';

function Products() {
    const [category, setCategory] = useSearchParams("")
    const [favoriteDatas, setFavoriteDatas] = useState([])

    const currentCategory = category.get('categoryId')

    const { data, basket, CurrentUser } = useSelector((store) => {
        return {
            data: store.product.data,
            basket: store.basket.items,
            CurrentUser: store.currentUser.CurrentUser,
        }
    })

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct(currentCategory))
        if (CurrentUser) {
            getFavItems()
        }
        setFavoriteDatas([])
    }, [dispatch, CurrentUser, currentCategory])

    const addToBasket = (product) => {
        dispatch(addToCart(product))
    }


    const addfavorite = async (productId) => {
        try {
            const response = await fetch(`http://localhost:3000/favItems`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: uuidv4(), UserId: CurrentUser.id, favItem: productId }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
        } catch (error) {
            console.error("Error:", error);
        }
        if (CurrentUser) {

            getFavItems()
        }
    }

    const getFavItems = async () => {
        const response = await fetch("http://localhost:3000/favItems");
        const favItems = await response.json();
        const UserFavoriteProduct = []
        favItems.forEach((x) => {
            if (x.UserId == CurrentUser.id) {
                UserFavoriteProduct.push(x)
            }
        })
        setFavoriteDatas(UserFavoriteProduct)
    }


    const IsFavorite = (productId) => {
        if (favoriteDatas == undefined) {
            return false
        }
        return favoriteDatas.find((x) => x.favItem == productId)
    }

    return (
        <div id='products' className='row g-3'>
            {data && data.map((product, index) => (
                <div key={index} className="col-4">
                    <div style={{ minHeight: "464px" }} className='card card-relative my-auto'>
                        <div onClick={() => addfavorite(product.id)} className="product-fav text-dark bg-light">
                            {IsFavorite(product.id) ? <i className="bi bi-heart-fill text-danger"></i> : <i className="bi bi-heart"></i>}
                        </div>
                        <div style={{ overflow: "hidden" }} className="card-img">
                            <img className='img-fluid' style={{ height: "100%" }} src={product.images[0]} alt="" />
                        </div>
                        <div className="card-body">
                            <h5><a className='text-dark text-decoration-none ' href="">{product.title}</a></h5>
                            <span>Score: {product.id} <i className="bi bi-star-fill text-warning"></i></span><br />
                            <span>Price: {product.price} $</span><br />
                        </div>
                        <div className='px-3'>
                            <div onClick={() => addToBasket(product)} className="btn btn-primary form-control my-0 mb-4">Add to cart</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products
import React, { useEffect, useState } from 'react'
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../../store/slices/BasketSlice'
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';


function Basket() {
    const [totalBasket, setTotalBasket] = useState(0)

    const { CurrentUser, basket } = useSelector((store) => {
        return {
            basket: store.basket.items,
            CurrentUser: store.currentUser.CurrentUser,
        }
    })
    const calculateTotalPrice = () => {
        let price = 0
        basket.forEach((item) => price += item.price * item.quantity)
        return price
    }

    useEffect(() => {
        const price = calculateTotalPrice()
        setTotalBasket(price)
    }, [basket])

    const dispatch = useDispatch()
    const deleteAllBasket = () => {
        dispatch(clearCart())
    }

    const minusQuantity = (id) => {
        dispatch(decreaseQuantity(id))
    }
    const plusQuantity = (id) => {
        dispatch(increaseQuantity(id))
    }
    const removeProduct = (id) => {
        dispatch(removeFromCart(id))
    }


    async function buyAllCarts() {
        if (CurrentUser) {
            try {
                const response = await fetch(`http://localhost:3000/orders`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id: uuidv4(), UserId: CurrentUser.id, order: [...basket] }),
                });

                const result = await response.json();
            } catch (error) {
                console.error("Error:", error);
            }
            dispatch(clearCart())
        } else {
            alert('Lütfen Giriş yapınız')
        }
    }



    return (
        <div className='basket'>
            <div className="card">
                <div className="cart-header">
                    <div className="cart-title m-3">
                        <h3>My Cart</h3>
                    </div>
                </div>
                <div className="car-body px-3">
                    {
                        basket.map((item, index) => (
                            <div key={index}>
                                <div className="row  py-2 my-2">
                                    <div className="col-4">
                                        <img className='w-100' src={item.images} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <span>{item.title}</span><br />
                                        <span>Price: {item.price} $</span>
                                    </div>
                                    <div className="col-12 pt-2 d-flex justify-content-between">
                                        <div>Quantity: {item.quantity} </div>
                                        <div className='d-flex gap-2'>
                                            <span onClick={() => plusQuantity(item.id)} className=" btn badge rounded-pill text-bg-primary"><i className="bi bi-plus"></i></span>
                                            <span onClick={() => minusQuantity(item.id)} className=" btn badge rounded-pill text-bg-danger"><i className="bi bi-dash"></i></span>
                                            <span onClick={() => removeProduct(item.id)} className=" btn badge rounded-pill text-bg-danger">Remove</span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))
                    }
                    <div className="row p-2 ">
                        <div className="col-12 mb-3">Total Price: {totalBasket} $</div>
                        <div className="col-6 px-2">
                            <div onClick={() => buyAllCarts()} className="btn-success btn border form-control">
                                Buy All
                            </div>
                        </div>
                        <div className="col-6 px-2 ">
                            <div onClick={deleteAllBasket} className="text-white btn btn-warning btn border form-control">
                                Delete All
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Basket
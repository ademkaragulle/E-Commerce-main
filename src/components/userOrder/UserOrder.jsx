import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function UserOrder() {
    const [Orders, setOrders] = useState([])

    const { CurrentUser } = useSelector((store) => {
        return {
            CurrentUser: store.currentUser.CurrentUser,
        }
    })

    useEffect(() => {
        getOrders()
    }, [CurrentUser])



    const getOrders = async () => {
        const response = await fetch("http://localhost:3000/orders");
        const orderItems = await response.json();
        const userOrder = []
        orderItems.forEach((x) => {
            if (x.UserId == CurrentUser.id) {
                userOrder.push(x.order)
            }
        })
        setOrders(userOrder)
    }


    const calcTotalAmaunt = (orders) => {
        console.log(orders)
        let totalAmaunt = 0
        orders.forEach((x) => totalAmaunt += x.price * x.quantity)
        return totalAmaunt
    }

    console.log(Orders)

    return (
        <div className='container'>
            <h3 className='text-center my-5'>My Orders</h3>
            <div className='p-4'>
                {
                    Orders ? Orders.map((item1, index) => (

                        <div className='card my-4 px-4 bg-secondary-subtle' key={index}>
                            {
                                item1.map((item, index) => (
                                    <div key={index} className="row ">
                                        <div className="col-3">
                                            <div className="card-img py-4">
                                                <img style={{ width: "200px" }} src={item.images[0]} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-6 py-2 d-flex justify-content-center flex-column">
                                            <h4 className="card-title">
                                                {item.title}
                                            </h4>
                                            <div>
                                                Price: {item.price} $
                                            </div>
                                            <div>
                                                Description: {item.description}
                                            </div>
                                            <div>
                                                Quantity: {item.quantity}
                                            </div>

                                        </div>
                                        {item1.length - 1 > index && <hr />}
                                    </div>
                                ))
                            }

                            <div className='row py-4'>
                                <hr />
                                <div className='col-6'>
                                    Total Cost : {calcTotalAmaunt(item1)} $
                                </div>
                                <div className='col-6 d-flex justify-content-end'>
                                    <div className="btn btn-primary">
                                        Give Back
                                    </div>
                                </div>
                            </div>

                        </div>
                    )) : <h1>Lütfen</h1>
                }
            </div>
        </div >
    )
}

export default UserOrder
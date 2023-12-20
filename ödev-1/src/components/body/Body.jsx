import React from 'react'
import Products from './products/Products'
import Basket from './basket/Basket'

function Body() {
    return (
        <div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-3">
                        <Basket />
                    </div>
                    <div className="col-9">
                        <Products />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
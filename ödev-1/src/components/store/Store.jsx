import { configureStore } from '@reduxjs/toolkit'
import { getProductReducer } from './slices/ProductSlice'
import { getcategoryReducer } from './slices/CategorySlice'
import { getCurrentUserReducer } from './slices/CurrentUser'
import { getBasketSliceReducer } from './slices/BasketSlice'

export const store = configureStore({
    reducer: {
        product: getProductReducer,
        category: getcategoryReducer,
        currentUser: getCurrentUserReducer,
        basket: getBasketSliceReducer
    }
})
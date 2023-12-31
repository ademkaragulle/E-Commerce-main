import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToFavorite = createAsyncThunk("addToFavorite", async (product) => {
    const response = await axios.get(`http://localhost:3000/favorites`)
    let data = await response.data
    const existingProduct = data.find(item => item.id === product.id);
    if (!existingProduct) {
        axios.post('http://localhost:3000/favorites', product)
            .catch(error => {
                console.error('İstek hatası:', error);
            });
    } else {
        axios.delete(`http://localhost:3000/favorites/${product.id}`)
            .catch(error => {
                console.error('Silme hatası:', error);
            })
    }
})
export const getFavorite = createAsyncThunk("addToFavorite", async () => {
    const response = await axios.get(`http://localhost:3000/favorites`)
    const data = await response.data
    return data
})

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteItems: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFavorite.fulfilled, (state, action) => {
            state.favoriteItems = action.payload
        })
    }
});


export const getfavoriteReducer = favoriteSlice.reducer;

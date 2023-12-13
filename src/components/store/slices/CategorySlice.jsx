import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getcategory = createAsyncThunk("getcategory", async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories");
    const category = await response.json();
    return category
})


const categorySlice = createSlice({
    name: 'category',
    initialState: {
        data: null,
        loading: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getcategory.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(getcategory.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        });
        builder.addCase(getcategory.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error Fetching Movies Data"
        })
    }
})


export const getcategoryReducer = categorySlice.reducer
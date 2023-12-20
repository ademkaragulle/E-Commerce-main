import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const url = 'http://localhost:3000/users'
export const searchUser = createAsyncThunk("searchUser", async (userIdPassword) => {
    const response = await fetch(url);
    const users = await response.json();

    const user = users.find(x => x.email == userIdPassword.email && x.password == userIdPassword.password);
    if (user) {
        return user;
    } else {
        return false;
    }
})

export const signOut = createAsyncThunk("signOut", async () => {
    return false
})


const CurrentUser = createSlice({
    name: 'product',
    initialState: {
        CurrentUser: null
    },

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(searchUser.fulfilled, (state, action) => {
            state.CurrentUser = action.payload
        });
        builder.addCase(signOut.fulfilled, (state, action) => {
            state.CurrentUser = null
        })
    }
})


export const getCurrentUserReducer = CurrentUser.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("user/login", async (user) => {
    try {
        const response = await axios.get("http://localhost:3000/users");
        const existingUser = response.data.find(
            (item) => item.userName === user.userName && item.password === user.password
        );
        return existingUser;
    } catch (error) {
        throw error;
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        currentUser: null,
    },
    reducers: {
        SignUp: async (state, action) => {
            const users = await axios.get("http://localhost:3000/users")
            const newUser = action.payload;
            const existingUser = users.data.find(item => item.userName === newUser.userName);
            if (!existingUser) {
                axios.post('http://localhost:3000/users', newUser)
                    .then(response => {
                        console.log('POST response: Başarılı');
                    })
                    .catch(error => {
                        console.error('POST error:', error);
                    });
            } else {
                alert("This user name is used")
            }
        },
        Logout: (state, action) => {
            state.currentUser = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        });
    },
});

export const {
    SignUp,
    Logout
} = userSlice.actions;

export const getUserReducer = userSlice.reducer;

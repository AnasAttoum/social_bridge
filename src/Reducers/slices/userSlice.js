import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addUsers = createAsyncThunk(
    'user/addUsers',
    async () => {
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
                return response.data
            })
        }
        catch (error) {
            console.log('Error in get users', error)
        }
    }
)

export const addUser = createAsyncThunk(
    'user/addUser',
    async (userId) => {
        try {
            return await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response => {
                return response.data
            })
        }
        catch (error) {
            console.log('Error in get user', error)
        }
    }
)

const initialState = {
    users: [],
    user: {name:'  '}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(addUsers.fulfilled, (state, action) => {
            return { ...state, users: action.payload }
        })
            .addCase(addUser.fulfilled, (state, action) => {
                return { ...state, user: action.payload }
            })

    },
})


export default userSlice.reducer
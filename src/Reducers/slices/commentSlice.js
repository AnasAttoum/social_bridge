import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addComments = createAsyncThunk(
    'comment/addcomments',
    async (postId) => {
        try {
            return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(response => {
                return response.data
            })
        }
        catch (error) {
            console.log('Error in get comments', error)
        }
    }
)

const initialState = []

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(addComments.fulfilled, (_, action) => {
            return action.payload
        })
    },
})


export default commentSlice.reducer
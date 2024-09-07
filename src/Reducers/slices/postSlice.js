import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addPosts = createAsyncThunk(
    'post/addPosts',
    async () => {
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
                return response.data
            })
        }
        catch (error) {
            console.log('Error in get posts', error)
        }
    }
)

export const addPost = createAsyncThunk(
    'post/addPost',
    async (postId) => {
        try {
            return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => {
                return response.data
            })
        }
        catch (error) {
            console.log('Error in get post', error)
        }
    }
)

const initialState = {
    posts: [],
    post: {
        id:0,
        body:'',
        title:''
    }
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(addPosts.fulfilled, (state, action) => {
            return { ...state, posts: action.payload }
        })
        .addCase(addPost.fulfilled, (state, action) => {
            return { ...state, post: action.payload }
        })
    },
})


export default postSlice.reducer
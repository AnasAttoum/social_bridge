import { ADD_POSTS, ADD_USERS, TOGGLE_LIKE, TOGGLE_SAVE } from "./actionTypes";

// Posts Actions
export const addPosts = (arr) => ({
    type: ADD_POSTS,
    payload: arr
})

// Users Actions
export const addUsers = (arr) => ({
    type: ADD_USERS,
    payload: arr
})


// LikedPosts Actions
export const toggleLike = (post) => ({
    type: TOGGLE_LIKE,
    payload: post
})

// SavedPosts Actions
export const toggleSave = (post) => ({
    type: TOGGLE_SAVE,
    payload: post
})
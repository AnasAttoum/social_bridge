import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLike: (state, action) => {
            if (state.some((id) => { return id === action.payload }))
                return state.filter((id) => {
                    return id !== action.payload
                })

            else
                return [...state, action.payload]
        }
    },
})

export const { toggleLike } = likeSlice.actions

export default likeSlice.reducer
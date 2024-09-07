import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const saveSlice = createSlice({
    name: 'save',
    initialState,
    reducers: {
        toggleSave: (state, action) => {
            if (state.some((id) => { return id === action.payload }))
                return state.filter((id) => {
                    return id !== action.payload
                })

            else
                return [...state,action.payload]
        }
    },
})

export const { toggleSave } = saveSlice.actions

export default saveSlice.reducer
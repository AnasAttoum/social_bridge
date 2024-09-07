import { TOGGLE_SAVE } from "./actionTypes"

const save = []

export default function SavedPosts(state = save, action) {
    switch (action.type) {
        case TOGGLE_SAVE:
            if (state.some((id) => { return id === action.payload }))
                return state.filter((id) => {
                    return id !== action.payload
                })

            else
                return [...state,action.payload]

        default:
            return state
    }
}

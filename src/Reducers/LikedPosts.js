import { TOGGLE_LIKE } from "./actionTypes"

const like = []

export default function LikedPosts(state = like, action) {
    switch (action.type) {
        case TOGGLE_LIKE:
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

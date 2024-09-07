import { ADD_POSTS } from "./actionTypes"

const posts = []

export default function Posts(state = posts, action) {
    switch (action.type) {
        case ADD_POSTS:
            return action.payload

        default:
            return state
    }
}

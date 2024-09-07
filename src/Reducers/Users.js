import { ADD_USERS } from "./actionTypes"

const users = []

export default function Users(state = users, action) {
    switch (action.type) {
        case ADD_USERS:
            return action.payload

        default:
            return state
    }
}

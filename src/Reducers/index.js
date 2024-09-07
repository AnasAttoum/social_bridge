import { combineReducers } from "redux"
import Posts from "./Posts"
import Users from "./Users"
import LikedPosts from "./LikedPosts"
import SavedPosts from "./SavedPosts"


export const AllReducers = combineReducers({
    Posts: Posts,
    Users: Users,
    LikedPosts: LikedPosts,
    SavedPosts: SavedPosts,
})
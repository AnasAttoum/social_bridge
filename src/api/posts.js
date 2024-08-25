import axios from 'axios'

export const getPosts = async () => {
    try {
        return await axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            return response.data
        })
    }
    catch (error) {
        console.log('Error in get posts', error)
    }
}

export const getPost = async (postId) => {
    try {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => {
            return response.data
        })
    }
    catch (error) {
        console.log('Error in get post', error)
    }
}

export const getComments = async (postId) => {
    try {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(response => {
            return response.data
        })
    }
    catch (error) {
        console.log('Error in get comments', error)
    }
}
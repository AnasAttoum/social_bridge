import axios from 'axios'

export const getUsers = async () => {
    try {
        return await axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.data
        })
    }
    catch (error) {
        console.log('Error in get users', error)
    }
}

export const getUser = async (userId) => {
    try {
        return await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response => {
            return response.data
        })
    }
    catch (error) {
        console.log('Error in get user', error)
    }
}
import React, { useEffect, useState } from 'react'
import BackgroundLetterAvatars from './BackgroundLetterAvatars'

import styles from '../styles/postDetails.module.css'
import { getComments, getPost } from '../api/posts'
import { getUser } from '../api/users'
import Comments from './Comments'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLike, toggleSave } from '../Reducers/actions'

export default function PostDetails({ postId }) {

    const [post, setPost] = useState({})
    const [user, setUser] = useState(null)

    const [comments, setComments] = useState([])

    const dispatch = useDispatch()

    const isLiked = useSelector(state => state.LikedPosts).some((id) => { return id === post.id })
    const isSaved = useSelector(state => state.SavedPosts).some((id) => { return id === post.id })

    useEffect(() => {
        (async () => {
            const postResponse = await getPost(postId)
            setPost(postResponse)
            setUser(await getUser(postResponse.userId))
            setComments(await getComments(postResponse.id))
        })()
    }, [postId])


    return (
        <div className='flex flex-col justify-center items-center mt-10 me-5'>
            <div className='my-5' style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '20px' }}>Product Details</div>
            <div className={`p-5 pb-1 rounded-lg ${styles.card}`}>
                {user && <div className='flex gap-5 items-center mb-5'>
                    <BackgroundLetterAvatars name={user.name} />
                    <div>
                        <div>{user.name}</div>
                        <div className={styles.website}>{user.website}</div>
                    </div>
                </div>}
                <div className='my-5'>{post.title}</div>
                <div className={styles.body}>{post.body}</div>

                <div className={`flex justify-evenly mt-5 ${styles.icons}`}>

                    <div className='flex justify-center items-center gap-5 p-2 rounded-md' onClick={() => { dispatch(toggleLike(post.id)) }}>
                        {isLiked ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#ef4444" d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.182a.833.833 0 0 1-.821-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.093-1.137l-.145-.047a1.35 1.35 0 0 0-.993.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.416.777-1.058 1.4-1.725 1.975l-1.44 1.24a1.67 1.67 0 0 0-.572 1.406l.813 9.393A1.666 1.666 0 0 0 8.596 22h4.649c3.481 0 6.452-2.426 7.024-5.735" /><path fill="#ef4444" fillRule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clipRule="evenodd" opacity="0.5" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="m20.975 12.185l-.739-.128zm-.705 4.08l-.74-.128zM6.938 20.477l-.747.065zm-.812-9.393l.747-.064zm7.869-5.863l.74.122zm-.663 4.045l.74.121zm-6.634.411l-.49-.568zm1.439-1.24l.49.569zm2.381-3.653l-.726-.189zm.476-1.834l.726.188zm1.674-.886l-.23.714zm.145.047l.229-.714zM9.862 6.463l.662.353zm4.043-3.215l-.726.188zm-2.23-1.116l-.326-.675zM3.971 21.471l-.748.064zM3 10.234l.747-.064a.75.75 0 0 0-1.497.064zm17.236 1.823l-.705 4.08l1.478.256l.705-4.08zm-6.991 9.193H8.596v1.5h4.649zm-5.56-.837l-.812-9.393l-1.495.129l.813 9.393zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357zM13.255 5.1l-.663 4.045l1.48.242l.663-4.044zm-6.067 5.146l1.438-1.24l-.979-1.136L6.21 9.11zm4.056-5.274l.476-1.834l-1.452-.376l-.476 1.833zm1.194-2.194l.145.047l.459-1.428l-.145-.047zm-1.915 4.038a8.4 8.4 0 0 0 .721-1.844l-1.452-.377A7 7 0 0 1 9.2 6.11zm2.06-3.991a.89.89 0 0 1 .596.61l1.452-.376a2.38 2.38 0 0 0-1.589-1.662zm-.863.313a.52.52 0 0 1 .28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305zm.28-.33a.6.6 0 0 1 .438-.03l.459-1.428a2.1 2.1 0 0 0-1.548.107zm2.154 8.176h5.18v-1.5h-5.18zM4.719 21.406L3.747 10.17l-1.494.129l.971 11.236zm-.969.107V10.234h-1.5v11.279zm-.526.022a.263.263 0 0 1 .263-.285v1.5c.726 0 1.294-.622 1.232-1.344zM14.735 5.343a5.5 5.5 0 0 0-.104-2.284l-1.452.377a4 4 0 0 1 .076 1.664zM8.596 21.25a.916.916 0 0 1-.911-.837l-1.494.129a2.416 2.416 0 0 0 2.405 2.208zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.897 1.196-1.553 1.76zm13.088 3.307a2.416 2.416 0 0 0-2.38-2.829v1.5c.567 0 1 .512.902 1.073zM3.487 21.25c.146 0 .263.118.263.263h-1.5c0 .682.553 1.237 1.237 1.237zm9.105-12.105a1.583 1.583 0 0 0 1.562 1.84v-1.5a.083.083 0 0 1-.082-.098zm-5.72 1.875a.92.92 0 0 1 .316-.774l-.98-1.137a2.42 2.42 0 0 0-.83 2.04z" /></svg>
                        }
                        <div style={isLiked ? { color: 'var(--primary)', transition: 'all .3s' } : { transition: 'all .3s' }}>Like</div>
                    </div>

                    <div className='flex justify-center items-center gap-5 p-2 rounded-md' onClick={() => { dispatch(toggleSave(post.id)) }}>
                        {isSaved ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="#f44336" d="m37 43l-13-6l-13 6V9c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4z" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 28 28"><path fill="black" d="M6 6.75A3.25 3.25 0 0 1 9.25 3.5h9.5A3.25 3.25 0 0 1 22 6.75v18a.75.75 0 0 1-1.203.598L14 20.19l-6.797 5.157A.75.75 0 0 1 6 24.75zM9.25 5A1.75 1.75 0 0 0 7.5 6.75v16.49l6.047-4.587a.75.75 0 0 1 .906 0L20.5 23.24V6.75A1.75 1.75 0 0 0 18.75 5z" /></svg>
                        }
                        <div style={isSaved ? { color: 'var(--primary)', transition: 'all .3s' } : { transition: 'all .3s' }}>Save</div>
                    </div>

                </div>
            </div>

            {comments.length === 0 ?
                <div className='mt-5'>Nothing to show here</div>
                :
                <Comments comments={comments} />
            }
        </div>
    )
}

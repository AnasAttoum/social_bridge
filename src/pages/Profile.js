import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPosts, addUsers } from '../Reducers/actions'
import { getPosts } from '../api/posts'
import { getUsers } from '../api/users'

import styles from '../styles/profile.module.css'
import PostCard from '../components/PostCard'

export default function Profile() {
    const allPosts = useSelector(state => state.Posts)
    const users = useSelector(state => state.Users)
    const likes = useSelector(state => state.LikedPosts)
    const saves = useSelector(state => state.SavedPosts)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            dispatch(addPosts(await getPosts()))
        })();

        (async () => {
            dispatch(addUsers(await getUsers()))
        })();
        // eslint-disable-next-line
    }, [])

    return (
        <div className={`flex justify-evenly my-10 ${styles.container}`} style={{ minHeight: '80vh' }}>

            <div style={{ width: '45vw' }}>
                {likes.length === 0 ?
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" width="18em" height="18em" viewBox="0 0 24 24"><path fill="none" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8-5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-7v4m-5.3 6.8l2.8-2m7.8 2l-2.8-2"></path></svg>
                        <div style={{ color: 'var(--primary)' }}>There is no liked posts yet</div>
                    </div>
                    :
                    <div className='flex flex-col flex-wrap items-center justify-center gap-5 my-10' style={{ minHeight: '70vh' }}>
                        <div style={{ color: 'var(--primary)' }}>YOUR LIKED POSTS</div>
                        {likes.map((id, index) => {
                            const post = allPosts.find((post) => { return post.id === id });
                            return <PostCard
                                key={index}
                                post={post}
                                users={users}
                                isLiked={likes.some((id) => { return id === post.id })}
                                isSaved={saves.some((id) => { return id === post.id })}
                                view={false} />
                        })}
                    </div>
                }
            </div>

            <div style={{ width: '45vw' }}>
                {saves.length === 0 ?
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" width="18em" height="18em" viewBox="0 0 24 24"><path fill="none" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8-5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-7v4m-5.3 6.8l2.8-2m7.8 2l-2.8-2"></path></svg>
                        <div style={{ color: 'var(--primary)' }}>There is no saved posts yet</div>
                    </div>
                    :
                    <div className='flex flex-col flex-wrap items-center justify-center gap-5 my-10' style={{ minHeight: '70vh' }}>
                        <div style={{ color: 'var(--primary)' }}>YOUR SAVED POSTS</div>
                        {saves.map((id, index) => {
                            const post = allPosts.find((post) => { return post.id === id });
                            return <PostCard
                                key={index}
                                post={post}
                                users={users}
                                isLiked={likes.some((id) => { return id === post.id })}
                                isSaved={saves.some((id) => { return id === post.id })}
                                view={false} />
                        })}
                    </div>
                }
            </div>

        </div>
    )
}

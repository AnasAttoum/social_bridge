import React, { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import BasicPagination from '../components/BasicPagination'
import AddPost from '../components/AddPost'
import Filter from '../components/Filter'
import SideBar from '../components/SideBar'

import styles from '../styles/posts.module.css'
import Spinner from '../components/Spinner'
import { addUsers } from '../Reducers/slices/userSlice'
import { addPosts } from '../Reducers/slices/postSlice'

const LazyPostDetails = lazy(() => import('../components/PostDetails'))

export default function Posts() {

    const {posts:allPosts} = useSelector(state => state.reducers.post)
    const { users } = useSelector(state => state.reducers.user)
    const likes = useSelector(state => state.reducers.like)
    const saves = useSelector(state => state.reducers.save)
    const dispatch = useDispatch()

    const [posts, setPosts] = useState([])
    const [selectedCard, setSelectedCard] = useState(0)

    const page = useRef(1)
    const filterNow = useRef('new')


    useEffect(() => {
        dispatch(addPosts())
        dispatch(addUsers())
        setPosts(allPosts.toReversed().slice(0, 5))
        // eslint-disable-next-line
    }, [])




    const changeOnPagination = (pageNumber) => {
        page.current = pageNumber
        if (filterNow.current === 'old') {
            setPosts(allPosts.slice(0 + ((pageNumber - 1) * 5), 5 + (pageNumber - 1) * 5))
        }
        else {
            setPosts(allPosts.toReversed().slice(0 + ((pageNumber - 1) * 5), 5 + (pageNumber - 1) * 5))
        }
    }

    const ChangeOnFilter = (filter) => {
        filterNow.current = filter
        if (filter === 'old') {
            setPosts(allPosts.slice(0 + ((page.current - 1) * 5), 5 + (page.current - 1) * 5))
        }
        else {
            setPosts(allPosts.toReversed().slice(0 + ((page.current - 1) * 5), 5 + (page.current - 1) * 5))
        }
    }

    const postsMemo = useMemo(() => {
        return allPosts.reduce((acc) => { return acc + 1 }, 0)
    }, [allPosts])

    return (
        <div className={`flex justify-between gap-5 ${styles.container}`} style={{ minHeight: '75vh' }}>
            <SideBar users={users} />

            <div className={styles.mid} style={{ width: '60vw' }}>
                <AddPost />

                <Filter ChangeOnFilter={ChangeOnFilter} postsMemo={postsMemo} />

                <div className='flex flex-col flex-wrap items-center justify-center gap-5 mt-10' style={{ minHeight: '70vh' }}>
                    {posts.length === 0 ?
                        allPosts.toReversed().slice(0, 5).map((post, index) => {
                            return <PostCard
                                key={index}
                                post={post}
                                users={users}
                                isLiked={likes.some((id) => { return id === post.id })}
                                isSaved={saves.some((id) => { return id === post.id })}
                                setSelectedCard={setSelectedCard} />
                        })
                        :
                        posts.map((post, index) => {
                            return <PostCard
                                key={index}
                                post={post}
                                users={users}
                                isLiked={likes.some((id) => { return id === post.id })}
                                isSaved={saves.some((id) => { return id === post.id })}
                                setSelectedCard={setSelectedCard} />
                        })
                    }
                </div>
                <BasicPagination length={allPosts.length / 5} changeOnPagination={changeOnPagination} />

            </div>

            <div>
                {selectedCard !== 0 && <Suspense fallback={<Spinner />}><LazyPostDetails postId={selectedCard} /></Suspense>}
            </div>
        </div>
    )
}
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { getPosts } from '../api/posts'
import { getUsers } from '../api/users'
import PostCard from '../components/PostCard'
import BasicPagination from '../components/BasicPagination'
import AddPost from '../components/AddPost'
import Filter from '../components/Filter'
import SideBar from '../components/SideBar'

export default function Posts() {

    const [posts, setPosts] = useState([])
    const [allPosts, setAllPosts] = useState([])
    const [users, setUsers] = useState([])
    const page = useRef(1)
    const filterNow = useRef('new')

    useEffect(() => {
        (async () => {
            const postResponse = await getPosts()
            setAllPosts(postResponse.toReversed())
            setPosts(postResponse.toReversed().slice(0, 5))
        })()
    }, [])

    useEffect(() => {
        (async () => {
            setUsers(await getUsers())
        })()
    }, [])

    

    const changeOnPagination = (pageNumber) => {
        page.current = pageNumber
        if (filterNow.current === 'new') {
            setPosts(allPosts.slice(0 + ((pageNumber - 1) * 5), 5 + (pageNumber - 1) * 5))
        }
        else {
            setPosts(allPosts.toReversed().slice(0 + ((pageNumber - 1) * 5), 5 + (pageNumber - 1) * 5))
        }
    }

    const ChangeOnFilter = (filter) => {
        filterNow.current = filter
        if (filter === 'new') {
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
        <div className='flex justify-between'>
            <SideBar users={users} />
            <div style={{ width: '100%' }}>
                <AddPost />

                <Filter ChangeOnFilter={ChangeOnFilter} postsMemo={postsMemo} />

                <div className='flex flex-col flex-wrap items-center justify-center gap-5 mt-10' style={{ minHeight: '70vh' }}>
                    {posts.map((post, index) => {
                        return <PostCard key={index} post={post} users={users} />
                    })}
                </div>
                <BasicPagination length={allPosts.length / 5} changeOnPagination={changeOnPagination} />

            </div>
        </div>
    )
}
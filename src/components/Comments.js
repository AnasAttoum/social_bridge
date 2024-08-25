import React, { memo, useMemo } from 'react'
import CommentCard from './CommentCard'

import styles from '../styles/postDetails.module.css'

function Comments({comments}) {

    const commentsMemo = useMemo(() => {
        return comments.reduce((acc) => { return acc + 1 }, 0)
    }, [comments])

    return (
        <div className='flex flex-col gap-5 mt-20 mb-10'>
            <div className='flex items-center gap-5'>
                <div className='ps-5'>Comments:</div>
                <div className={`${styles.commentsNum} flex justify-center items-center p-3`}>{commentsMemo}</div>
            </div>
            {comments.map((comment, index) => {
                return <CommentCard key={index} comment={comment} />
            })}
        </div>
    )
}

export default memo(Comments)
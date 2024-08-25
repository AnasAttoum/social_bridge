import React from 'react'
import BackgroundLetterAvatars from './BackgroundLetterAvatars'

import styles from '../styles/commentCard.module.css'

export default function CommentCard({ comment }) {

    return (
        <div className={`${styles.card} p-5 rounded-md`}>
            <div className='flex gap-5 items-center mb-5'>
                <BackgroundLetterAvatars name={comment.email.slice(0, 1) + ' ' + comment.email.slice(1, 2)} />
                <div>
                    <div>{comment.email}</div>
                </div>
            </div>
            <div>{comment.name}</div>
            <div style={{ color: '#444' }}>{comment.body}</div>

            <div className='flex gap-5 mt-5'>
            <div style={{ color: '#aaa', cursor: 'pointer' }}>Reply</div>
            <div style={{ color: '#aaa', cursor: 'pointer' }}>Like</div>
            </div>
        </div>
    )
}
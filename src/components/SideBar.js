import React from 'react'

import styles from '../styles/sideBar.module.css'
import BackgroundLetterAvatars from './BackgroundLetterAvatars'

export default function SideBar({ users }) {
    return (
        <div className={styles.sideBar}>
            <div className='my-5'>Your Friends</div>
            {users.map((user, index) => {
                return <div key={index} className={`${styles.card} flex justify-between items-center p-3`}>
                    <div className='flex items-center gap-2'>
                        <BackgroundLetterAvatars name={user.name} />
                        <div>{user.name}</div>
                    </div>
                    <div></div>
                </div>
            })}
        </div>
    )
}

import React from 'react'
import styles from '../styles/addPost.module.css'
import BackgroundLetterAvatars from './BackgroundLetterAvatars'

export default function AddPost() {
    return (
        <div className='flex justify-center my-16'>
            <div className={`flex gap-5 p-5 rounded-lg ${styles.card}`}>

                <BackgroundLetterAvatars name={'Anas Attoum'} />

                <div className='flex flex-col justify-center items-center'>
                    <input type="text" className={styles.input} placeholder='Write your post here' />
                    <div className='flex justify-between mt-5' style={{ width: '100%' }}>
                        <div className={`flex items-center gap-5 ${styles.icons}`}>
                            <div className='flex gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="m8.5 13.5l2.5 3l3.5-4.5l4.5 6H5m16 1V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"></path></svg>
                                <div>Image</div>
                            </div>
                            <div className='flex gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" fillRule="evenodd" d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1.586l2.293 2.293A1 1 0 0 0 22 16V8a1 1 0 0 0-1.707-.707L18 9.586V8a3 3 0 0 0-3-3z" clipRule="evenodd"></path></svg>
                                <div>Video</div>
                            </div>
                            <div className='flex gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z"></path></svg>
                                <div>Poll</div>
                            </div>
                        </div>
                        <div className='flex items-center px-5' style={{ backgroundColor: 'var(--primary)', color: 'white', cursor: 'pointer', borderRadius: '10px' }}>Post</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

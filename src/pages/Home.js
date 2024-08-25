import React from 'react'

import styles from '../styles/home.module.css'

export default function Home() {
    return (
        <div className={`flex justify-evenly items-center my-5 ${styles.container}`} style={{ minHeight: '90vh' }}>
            <div className={`flex flex-col items-center justify-center gap-10 ${styles.intro}`}>
                <div>Welcome to <span style={{color:'var(--secondary)'}}>Social Bridge</span></div>
                <div> the ultimate social media platform designed to connect you with the world! Discover, share, and engage with a diverse community of users</div>
            </div>
            <div>
                <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" width="18em" height="18em" viewBox="0 0 24 24"><path fill="none" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8-5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-7v4m-5.3 6.8l2.8-2m7.8 2l-2.8-2"></path></svg>
            </div>
        </div>
    )
}

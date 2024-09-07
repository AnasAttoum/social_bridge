import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import styles from '../styles/header.module.css'

export default function Header() {

    const links = [
        { url: '/', name: 'Home' },
        { url: '/posts', name: 'Posts' },
        { url: '/profile', name: 'Profile' },
    ]

    let location = useLocation()
    let pathname = location.pathname

    return (
        <>
            <div className={`${styles.header} flex justify-between p-5 px-10`}>
                <div className='flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8-5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-7v4m-5.3 6.8l2.8-2m7.8 2l-2.8-2"></path></svg>
                    <div className={`${styles.logo} font-bolder`}>Social Bridge</div>
                </div>
                <div className='flex gap-5'>
                    {links.map((link,index)=>{
                        const isActive = pathname.slice(1).includes(link.name.toLowerCase()) || (pathname.slice(1) === '' && link.name === 'Home')
                        return <Link to={link.url} key={index} style={isActive ? { fontWeight: '700' } : {}}>{link.name}</Link>
                    })}
                </div>
            </div>

            <Outlet />

            <div className={styles.footer}>
                © 2024 Social Bridge. All Rights Reserved.
            </div>
        </>
    )
}
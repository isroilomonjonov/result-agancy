import React from 'react'
import Navbar from './navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                {children}
            </div>
        </div>
    )
}

export default Layout
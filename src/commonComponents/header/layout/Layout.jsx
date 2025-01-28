import React from 'react'
import Navigation from '../navigation/Navigation'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <>
                <Navigation />
                <div className="content">
                    <Outlet /> 
                </div>
            </>

        </>
    )
}

export default Layout

import React from 'react'
import Navigation from '../navigation/Navigation'
import { Outlet } from 'react-router-dom'

function Layout({setIsAuthenticated,isAuthenticated}) {
    return (
        <>
            <>
                <Navigation setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>
                <div className="content">
                    <Outlet /> 
                </div>
            </>

        </>
    )
}

export default Layout

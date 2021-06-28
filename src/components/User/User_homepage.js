import React from 'react'
import UserDashboard from './UserDashboard'

import UserSidebar from './UserSideBar'
import User_Navbar from './User_Navbar'


function User_homepage() {
    return (
        <>
            <User_Navbar/>
            <UserDashboard/>
            <UserSidebar/>
           
        </>
    )
}

export default User_homepage

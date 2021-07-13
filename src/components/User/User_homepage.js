import React from 'react'
import UserDashboard from './UserDashboard'

import UserSidebar from './UserSideBar'
import UserNavbar from './User_Navbar'


function User_homepage() {
    return (
        <>
            <UserNavbar/>
            <UserDashboard/>
            <UserSidebar/>
           
        </>
    )
}

export default User_homepage

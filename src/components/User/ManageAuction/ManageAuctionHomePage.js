import React from 'react'
import Navbar from '../../Navbar'
import UserDetails from './UserDetails'

function ManageAuctionHomePage() {
    return (
        <>
        <div>
            <Navbar/>
            <UserDetails/>
        </div>
        <div>
            <address/>
        </div>
        </>
    )
}

export default ManageAuctionHomePage;

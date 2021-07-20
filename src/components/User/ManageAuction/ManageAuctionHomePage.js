import React from 'react'
import Navbar from '../../Navbar'
import UserDetails from './UserDetails'

function ManageAuctionHomePage() {
    return (
        <>
         <Navbar/>
        <div className='container border'
                    style={{marginTop: '50px',
                    width: '50%',
                    // border-radius: '5px',
                    backgroundImage: `url(mail1.jpg)`,
                    ackgroungPosition: 'center',
                    backgroundSize: 'cover'}}>

                    
        <div>
           
            <UserDetails/>
        </div>

        </div>
       
        </>
    )
}

export default ManageAuctionHomePage;

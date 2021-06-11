import React from 'react'
// import {Link} from 'react-router-dom'

import {NotificationsNone, Language, Settings} from '@material-ui/icons'
// import Sidebar from '../Sidebar/Sidebar'
// import Home from '../OtherPages/home/home'

function SellerHomePage() {
    return (

        
        <div>
             <div className='topbar'>
                
                <div className='topbarWrapper'>
                    <div className='topLeft'> <span className="logo">Seller</span></div>
                       
                    <div className='topRight'>

                        <div className="topbarIconContainer">
                            <NotificationsNone/>
                            <span className="topIconBadge">3</span>
                        </div>

                        <div className="topbarIconContainer">
                            <Language/>
                            <span className="topIconBadge">1</span>
                        </div>

                        <div className="topbarIconContainer">
                            <Settings/>
                            
                        </div>
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="topAvatar" />
                    </div>
                </div>
            </div>
            {/* <h2>Welcome to Seller Home Page</h2> */}

            <ul>
                
                
                
            </ul>
        </div>
    )
}

export default SellerHomePage;

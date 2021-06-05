import React from 'react'
import './xls.css'
import backgroundvideo from './video-2.mkv'

export default function xls() {
    return (

        
        <div className='newcards'>

            <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        width: '100%',
                        left: '50%',
                        top: '50%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'translate(-50%, -50%)' ,
                        zIndex: '-1'

                    }}
                >
                    <source src={backgroundvideo} type='video/mp4'/>
            </video>

            <h2>Welcome to signup</h2>
                
            
                <div class="container">
                    <img src="images/img-10.png" alt="Avatar" class="image" />
                        <div class="middle">
                            <div class="text">Admin</div>
                        </div>
                </div>

                <div class="container">
                    <img src="images/img-10.png" alt="Avatar" class="image" />
                        <div class="middle">
                            <div class="text">Buyer</div>
                        </div>
                </div>
                
                <div class="container">
                    <img src="images/img-10.png" alt="Avatar" class="image" />
                        <div class="middle">
                            <div class="text">Seller</div>
                        </div>
                </div>
                
        </div>

        
        
    )
}




import React from 'react'
import './LoginPortal.css'
import backgroundvideo from './video-2.mkv'
import {Link} from 'react-router-dom'
import ValidatedLoginForm from './ValidatedLoginForm'


export default function xls() {
    return (

        
        <div className='newcards'>
{/* backgroung video */}
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

            <h2>Welcome to Sign In</h2>
                
            {/* admin */}
                <div class="container">
                    <img src="images/img-10.png" alt="Avatar" class="image" />
                        <div class="middle">
                            <Link 
                            to='./ValidatedLoginForm'>
                            <button  class='button' ><span>Admin</span></button>
                            </Link>
                        </div>
                </div>
                    {/* Buyer */}
                <div class="container">
                    <img src="images/img-10.png" alt="Avatar" class="image" />
                        <div class="middle">
                            <Link>
                            <button class='button' ><span>Buyer</span></button>
                            </Link>
                        </div>
                </div>
                {/* Seller */}
                <div class="container">
                    <img src="images/img-10.png" alt="Avatar" class="image" />
                        <div class="middle">
                            <Link>
                            <button  class='button' ><span>Seller</span></button>
                            </Link>
                        </div>
                </div>

            

                
               
                
        </div>

        
        
    )
}




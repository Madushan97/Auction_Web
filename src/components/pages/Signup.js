import React from 'react'

// import SignUpForm from '../signup/Form'
import SignupcardItems from '../SignupcardItems'
import './SignUp.css' 
import {Link} from 'react-router-dom'


function Signup() {
    return (
        <div>
            
<h1>Welcome to SignUp</h1>
        <div className='cards'>
            <div className="cards__container">
                <div className="crads__wrapper">
                    <ul className='card__items'>
                        
                        <Link to='../signup/Form.js'>
                        <SignupcardItems
                            src='images/img-8.png'
                            text='Admin'
                            label='Admin'
                            path='/SignUpForm'
                        
                        />
                        </Link>
                        
                        <SignupcardItems
                            src='images/img-9.png'
                            text='Buyer'
                            label='Buyer'
                            path='/SignUpForm'
                        
                        />
                        
                        <SignupcardItems
                            src='images/img-10.png'
                            text='Seller'
                            label='Seller'
                            path='/SignUpForm'
                        
                        />


                        
                    </ul>
                    
                </div>
            </div>
        
             </div> 
            
        </div>
        
    )
}

export default Signup;

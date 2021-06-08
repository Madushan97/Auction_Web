import React from 'react'
import {Link} from 'react-router-dom'

function BuyerHomePage() {
    return (
        <div>
            <h2>Welcome to Buyer Home Page</h2>

            <ul>
                <li><Link 
                        to='/Cards'>
                    <button>Place a Bid</button>
                    </Link>
                </li>
                <li><Link
                        to='/Createauction'>
                    <button>Create an Auction</button>
                    </Link>
                </li>
                <li><Link to='/Cards'>
                    <button>Manage Bid</button>
                    </Link>
                </li>
                <li>
                    <button>Summary</button>
                </li>
                <li>
                    <button>Recently View</button>
                </li>
                <li>
                    <button>Purchase History</button>
                </li>
                <li>
                    <button>Save Search</button>
                </li>
                <li>
                    <button>Messages</button>
                </li>
                <li>
                    <button>Help and Contact</button>
                </li>
                <li>
                    <button>Daily Deals</button>
                </li>
            </ul>
        </div>
    )
}

export default BuyerHomePage;

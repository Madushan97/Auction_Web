import React from 'react'
import './AdminHomePage.css'
import {Link} from 'react-router-dom'

function AdminHomePage() {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <Link to='/CreateAuction'>
            <button>
                Create Auction
            </button>
            </Link>

            <Link to='/Auctionlist'>
            <button>
                Auction List
            </button>
            </Link>

            <Link to='/Createseller'>
            <button>
                Create Seller
            </button>
            </Link>

            <Link to='/Createbuyer'>
            <button>
                Create Buyer
            </button>
            </Link>

            <Link to='/Editauction'>
            <button>
                Edit Auction
            </button>
            </Link>
        </div>
    )
}

export default AdminHomePage;

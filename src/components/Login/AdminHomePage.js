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
                <Link to='/Cards'>
            <button>
                Auction List
            </button>
            </Link>
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

            <Link to='/Cards'>
            <button>
                Edit Auction
            </button>
            </Link>
            {/* <Link to='/'>
            <button>
                Edit Auction
            </button>
            </Link> */}
        </div>
    )
}

export default AdminHomePage;

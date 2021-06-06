import React from 'react'
import './AdminHomePage.css'
import {Link} from 'react-router-dom'

function AdminHomePage() {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <Link to='/Createauction'>
            <button>
                Create Auction
            </button>
            </Link>

            <Link to='/Auctionlist'>
            <button>
                Auction List
            </button>
            </Link>

            <Link to='/Createuser'>
            <button>
                Create User
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

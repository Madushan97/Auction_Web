import React from 'react'
import './CardDetails.css'
import {Link} from 'react-router-dom'


export default function CardDetails() {
    return (
        <div>
            <Link to='/'>Back to Home page</Link>
            <div className='row top'>
                <div className='col-2'>
                    <img className='large' src='images/img-3.jpg' alt='gem' ></img>
                </div>
                <div className='col-1'>
                    <ul>
                        <li>
                            {/* <h1>Gem</h1> */}
                        </li>
                        <li>Price</li>
                        <li>Description</li>
                        {/* <p>Description</p> */}
                    </ul>
                </div>
                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li>
                                <div className='row'>
                                    <div>Price</div>
                                </div>
                            </li>

                            <li>
                                <div className='row'>
                                    <div>Status</div>
                                </div>
                            </li>
                            <li><Link to='/BidPlace'>
                                <button className='primary block'>Place a Bid</button>
                                </Link>
                            </li>

                            <li><Link to='/Editauction'>
                                <button className='primary block'>Edit Auction</button>
                                </Link>
                            </li>

                            <li><Link to='/ConfirmationLog'>
                                <button className='primary block'>Delete Auction</button>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

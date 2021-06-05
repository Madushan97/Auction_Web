import React from 'react'
import {Link} from 'react-router-dom'

function SignupcardItems(props) {
    return (
        <>
            <li className= "cards__item1">
                {/* will take what we put in  the path in Card.js */}
                <Link className="cards__item__link1" to={props.path}>

                    <figure className="cards__item__pic-wrap1" data-category={props.label}>
                        <img src={props.src} alt="Gem " className="cards__item__img1" />
                    </figure>
                    <div className="cards__item__info1">
                        <h5 className="cards__item__text1">{props.text}</h5>
                        
                    </div>
                </Link>
            </li>
        </>
    )
}

export default SignupcardItems;
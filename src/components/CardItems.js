import React from 'react'
import {Link} from 'react-router-dom'

function CardItems(props) {
    return (
        <>
            <li className= "cards__item">
                {/* will take what we put in  the path in Card.js */}
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Gem " className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props._id}</h5>
                        <h5 className="cards__item__text">{props.name}</h5>
                        <h5 className="cards__item__text">{props.size}</h5>
                        <h5 className="cards__item__text">{props.weight}</h5>
                        <h5 className="cards__item__text">{props.carote}</h5>
                        <h5 className="cards__item__text">{props.reviews}</h5>
                        <h5 className="cards__item__text">{props.description}</h5>
                    </div>
                </Link>
            </li>

            

            

            
        </>
    )
}

export default CardItems;

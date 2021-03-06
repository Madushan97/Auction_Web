import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';



const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const CreateAuctionButton = ({children, type, onClick, buttonStyle, buttonSize}) => {
    // if button has some styles then class will change to buttonStyle if there is something mentioned, if not 'btn--primary' will happen
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];        

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];             

    return(
        <Link to='/AuctionList' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>

        
    )
};

export default CreateAuctionButton;
import React, { useState, useEffect } from 'react';
import { SignOutButton } from './SignOutButton';
import { Link } from 'react-router-dom';
import './User_Navbar.css';



function UserNavbar() {
// toggle the state of this button
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

// switching the button icon
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  // if pixes is less than 960 Login button will dissapear automatically
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
// to avoid the unnecessary  sign up button appearing
  useEffect(() => {
    showButton();
    // by pasing empty Array
  }, []);
// when screen is resized showbutton function will happen
  window.addEventListener('resize', showButton);

  return (
    <>
   
      <nav className='navbar'>
        <div className='navbar-container'>

          {/* if click on the text it will close the menu */}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Online Auction
            <i class='fab fa-typo3' />
          </Link>

          {/* if click on the Logo it will change the class */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          {/* if click on the navigation button then nav bar will disappear*/}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              {/* navigation bar Home button */}
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              {/* navigation bar Bid button  */}
              <Link to='/UserAuctions' className='nav-links' onClick={closeMobileMenu}>
                Bid
              </Link>
            </li>

            <li className='nav-item'>
              {/* navigation bar Sell button */}
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Sell
              </Link>
            </li>

            <li className='nav-item'>
              {/* navigation bar Daily Deals button */}
              <Link to='/Dailydeals' className='nav-links' onClick={closeMobileMenu}>
                Daily Deals
              </Link>
            </li>

          </ul>
          {/* if button is true  */}
          {button && <SignOutButton buttonStyle='btn--outline'>Sign Out</SignOutButton>}
        </div>
      </nav>
      
    </>
    
  );
}

export default UserNavbar;
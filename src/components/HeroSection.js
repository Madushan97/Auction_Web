import React from 'react';
import '../App.css';
import { GetStartedButton } from './GetStartedButton';
import {CreateAuctionButton} from './CreateAuctionButton'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* backgroud video */}
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>WELCOME TO <p1>O</p1>NLINE <p1>A</p1>UCTION</h1>
      <p>What are you waiting for?</p>

    {/* to sign in to the system */}
      <div className='hero-btns'>
        <GetStartedButton
        // to='./pages/Signup.js'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path="/SignUpHomepage"
        >
          GET STARTED
        </GetStartedButton>
        
    {/* to create an auction */}
        <CreateAuctionButton
          to='./AuctionList'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('/')}
        >
          {/* i for the image next to text */}
          CREATE AUCTION <i className='far fa-play-circle' />
        </CreateAuctionButton>

      </div>
    </div>
  );
}

export default HeroSection;
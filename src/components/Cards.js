import React from 'react';
import './Cards.css';
import CardItems from './CardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Open Your Lid and Start to Bid.!</h1>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
        
            <CardItems
              
              src='images/img-1.jpg'
              _id='A02'
              name= 'Dimond'
              size='13mm'
              weight='Diamond'
              carote='12'
              reviews='5 review'
              label='Garnet'
              description='hivvvv'
              path='/CardDetails'
              
            />
           
            <CardItems
            
            src='images/img-3.jpg'
            _id='A02'
            name= 'Dimond'
            size='13mm'
            weight='Diamond'
            carote='Diamond'
            review='Diamond'
            description='hi'
            label='Diamond'
              />
          </ul>

          <CardItems
            
            src='images/img-7.jpg'
            _id='A02'
            name= 'Cat Eye'
            // size='13mm'
            // weight='Diamond'
            // carote='Diamond'
            // review='Diamond'
            // description='hi'
            label='Cat eye'
              />
          

          <CardItems
            
            src='images/img-6.jpg'
            _id='A02'
            name= 'Ruby'
            // size='13mm'
            // weight='Diamond'
            // carote='Diamond'
            // review='Diamond'
            // description='hi'
            label='Ruby'
              />

<CardItems
            
            src='images/img-5.jpg'
            _id='A02'
            name= 'Dimond'
            size='13mm'
            // weight='Diamond'
            // carote='Diamond'
            // review='Diamond'
            // description='hi'
            label='Spinel'
              />

<CardItems
            
            src='images/img-4.jpg'
            _id='A02'
            name= 'Rose Quartz'
            size='13mm'
            // weight='Diamond'
            // carote='Diamond'
            // review='Diamond'
            // description='hi'
            label='Rose Quartz'
              />
          
          
          {/* <ul className='cards__items'>
            <CardItems
              src='images/img-3.jpg'
              text= 'Details'
              label='Ruby'
              // path='/BidForm'            
            />
            <CardItems
              src='images/img-4.jpg'
              text= 'Details'
              label='Diamond'
              // path='/BidForm'
              />
            <CardItems
              src='images/img-5.jpg'
              text= 'Details'
              label='DIamond'
              // path='/BidForm'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
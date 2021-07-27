import React from 'react';
// import './Cards.css';
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
        
                  path='/CardDetails'

                  _id='AUction ID: A01'
                  name= 'Name: Dimond'
                  carate='Carate: 5'
                  reviews='Review: '
                  description='Description: Cut'
                  label='Diamond'

                      
            />
           
          
          <CardItems
            
                src='images/img-11.jpg'
                _id='AUction ID: A03'
                name= 'Name: Cat Eye'
                carate='Carate: 6'
                reviews='Review: '
                description='Description: Uncut'
                label='Cat Eye'
                  />
              
          <CardItems
            
                src='images/img-6.jpg'
                _id='AUction ID: A04'
                name= 'Name: Ruby'
                carate='Carate: 1'
                reviews='Review: '
                description='Description: Cut'
                label='Ruby'

              />


            <CardItems
            
            src='images/img-13.jpg'
            
                label='Alexandrite'
                _id='AUction ID: A05'
                name= 'Name: Alexandrite'
                carate='Carate: 3'
                reviews='Review: '
                description='Description: Cut'
           
              />

          <CardItems
            
                src='images/img-12.jpg'
                _id='Auction ID :A06'
                name= 'Name : Rose Quartz'
                size='carate : 5'
                description='Description: Uncut'
                label='Rose Quartz'
                
              />
          
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
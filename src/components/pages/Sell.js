import React from 'react'
import '../Cards.css'
import Navbar from '../Navbar';
import CardItems from '../CardItems'


function Sell(){

    return(
         <>

           <Navbar/>
   
    <div className='cards'>
      {/* <h1>Open Your Lid and Start to Bid.!</h1> */}
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
                
                    <CardItems
                    
                        src='images/img-13.jpg'
                        path='/CardDetails'
                        _id='AUction ID: A01'
                        name= 'Name: Alexandrite'
                        carate='Carate: 5'
                        reviews='Review: '
                        description='Description: Cut'
                        label='Alexandrite'
                            
                    />
                
                <CardItems
                    
                        src='images/img-11.jpg'
                        _id='AUction ID: A03'
                        name= 'Name: Cat Eye'
                        carate='Carate: 7'
                        reviews='Review: '
                        description='Description: Uncut'
                        label='Cat Eye'
                        />
                    
                <CardItems
                    
                        src='images/img-6.jpg'
                        _id='AUction ID: A04'
                        name= 'Name: Ruby'
                        carate='Carate: 6'
                        reviews='Review: '
                        description='Description: cut'
                        label='Ruby'

                    /> 
                    </ul>

                <ul className='cards__items'>

                <CardItems
                    
                    src='images/img-14.jpg'
                    
                        label='Citrine'
                        _id='AUction ID: A05'
                        name= 'Name: Citrine'
                        carate='Carate: 3'
                        reviews='Review: '
                        description='Description: Cut'
                        

                    />

                <CardItems
                    
                        src='images/img-4.jpg'
                        _id='Auction ID :A06'
                        name= 'Name : Rose Quartz'
                        size='carate : 5'
                        description='Description: Cut'
                        label='Rose Quartz'
                    />
           </ul>

           
         
          
        </div>
      </div>
    </div>
    </>
  );
}



export default  Sell;

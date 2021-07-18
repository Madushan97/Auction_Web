import React from 'react'
import SpecialCard from './SpecialCard'

function DailyDealsHome() {
    return (
        <>
         
            <div>
                <grid item xs ={6}>
                <SpecialCard/>
                </grid>

                <grid item xs = {6}>
                <SpecialCard/>
                </grid>
                 
            </div>
    
      
        </>
    )
}

export default DailyDealsHome;

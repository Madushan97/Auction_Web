/* eslint-disable no-unused-vars */
import '../../App.css'
import React from 'react'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer'
import Navbar from '../Navbar'



function Home(){
    return(
        <>           
            <HeroSection/>
            <Cards/>
            
            <Footer/>
        </>
    )
}

export default Home;

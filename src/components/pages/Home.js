/* eslint-disable no-unused-vars */
import '../../App.css'
import React from 'react'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Chatbot from '../ChatBot/Chatbot'



function Home(){
    return(
        <>  <Navbar/>         
            <HeroSection/>
            <Cards/>
       
            <Footer/>
        </>
    )
}

export default Home;

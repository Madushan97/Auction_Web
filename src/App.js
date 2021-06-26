import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

import Home from './components/pages/Home'
// import bid from './components/pages/Bid'
import Sell from './components/pages/Sell'
import Feedback from './components/Feedback'
import Form from './components/signup/Form'
import Cards from './components/Cards'
import DailyDeals from './components/pages/DailyDeals'
import LoginPage from './components/Login/LoginPage'
import AuctionList from './components/Auction/AuctionCard'
import SignUp from './components/Registration/SignUp'
import AuctionCard from './components/Auction/AuctionCard'
import SignInSide from './components/Login/LoginPage'
import Dashboard from './components/Admin_Dashboard/Dashboard'
import AddressForm from './components/Checkout/AddressForm'
import Checkout from './components/Checkout/Checkout'
import GemDetails from './components/Auction/GemDetails'
import CardView from './components/Auction/CardView'


function App() {
  return (
    <>
    {/* all of the routers */}
    <Router>
        <Navbar/>
            
        <Switch>
          {/* home page connection */}
          <Route path='/' exact component={Home}/>
          {/* bid page connection */}
          {/* <Route path='/bid' component={bid}/> */}
          {/* Sell page connection */}
          <Route path='/sell' component={Sell}/>   
          {/* Feddback page connection */}
          <Route path ='/Feedback' component={Feedback}/>
          {/* have some errors. can't remove it */}
          <Route path ='/Form' component={Form}/>
          {/* card templates */}
          <Route path ='/Cards' component={Cards}/>
          {/* daily deals--> Hot deals */}
          <Route path ='/DailyDeals' component={DailyDeals}/>
          {/* Login page */}
          <Route path ='/LoginPage' component={LoginPage}/>
          {/* Auction List that are available at the moment */}
          <Route path ='/AuctionList' component={AuctionList}/>
          {/* SignUp form */}
          <Route path = '/SignUp' component={SignUp}/>

          <Route path='/AuctionCard' component={AuctionCard}/>

          <Route path = '/SignInSide' component={SignInSide}/>

          <Route path = '/Dashboard' component={Dashboard}/>

          <Route path = '/AddressForm' component = {AddressForm}/>

          <Route path = '/Checkout' component={Checkout}/>

          <Route path = '/Navbar' component = {Navbar}/>

          <Route path = '/GemDetails' component={GemDetails}/>
          {/* Deatails of the particular auction */}
          <Route pathe = '/CardView' component = {CardView}/>
   

     

        </Switch>
        
    </Router>
           
    </>
  );
}

export default App;

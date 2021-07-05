import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

import Home from './components/pages/Home'
// import bid from './components/pages/Bid'
import Sell from './components/pages/Sell'
import Feedback from './components/Footer_Component/Feedback'
import Form from './components/signup/Form'
import Cards from './components/Cards'
import DailyDeals from './components/pages/DailyDeal/DailyDeals'
import LoginPage from './components/Login/LoginPage'
import AuctionList from './components/Auction/Auctions'
import Auctions from './components/Auction/Auctions'
import SignUpHomepage from './components/Registration/SignUpHomepage'
import LoginHomepage from './components/Login/LoginHomepage'
import Dashboard from './components/Admin_Dashboard/Dashboard'
import AddressForm from './components/Checkout/AddressForm'
import Checkout from './components/Checkout/Checkout'
import GemDetails from './components/Auction/GemDetails'
import CardView from './components/Auction/CardView'
import User_Homepage from './components/User/User_Homepage'
import UserNavBar from './components/User/UserNavBar'
import UserSideBar from './components/User/UserSideBar'
import AuctionHomepage from './components/Auction/AuctionHomepage'
import User_Navbar from './components/User/User_Navbar'
import UserAuctions from './components/User/UserAuctions'
import UserDashboard from './components/User/UserDashboard'
import CreateAuctionForm from './components/User/Auction/CreateAuctionForm'

import CreateAuction from './components/User/Auction/CreateAuction'

import GemStatus from './components/User/Auction/GemStatus'
import GemWeight from './components/User/Auction/GemWeight'
import GemAmount from './components/User/Auction/GemAmount'
import GemImageUpload from './components/User/Auction/GemImageUpload'

function App() {
  return (
    <>

    {/* all of the routers */}
    <Router>
        {/* <Navbar/> */}
            
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
          <Route path = '/SignUpHomepage' component={SignUpHomepage}/>

          <Route path='/Auctions' component={Auctions}/>

          <Route path = '/LoginHomepage' component={LoginHomepage}/>
          {/* Admin dashboard */}
          <Route path = '/Dashboard' component={Dashboard}/>

          <Route path = '/AddressForm' component = {AddressForm}/>

          <Route path = '/Checkout' component={Checkout}/>

          <Route path = '/Navbar' component = {Navbar}/>

          <Route path = '/GemDetails' component={GemDetails}/>
          {/* Deatails of the particular auction */}
          <Route path = '/CardView' component = {CardView}/>
          {/* User Home page */}
          <Route path = '/UserNavBar' component= {UserNavBar}/>

          <Route path = '/User_Homepage' component = {User_Homepage}/>

          <Route path = '/UserSideBar' component = {UserSideBar}/>

          <Route path = '/SignUpHomepage' component={SignUpHomepage}/>

          <Route path = '/Auctions' component ={Auctions}/>

          <Route path = '/AuctionHomepage' component={AuctionHomepage}/>

          <Route path = '/User_Navbar' component = {User_Navbar}/>

          <Route path = '/UserAuctions' component = {UserAuctions}/>

          <Route path = '/UserDashboard' component = {UserDashboard}/>

          <Route path = '/CreateAuctionForm' component = {CreateAuctionForm}/>
        
          <Route path = '/GemImageUpload' component = {GemImageUpload}/>

          <Route path = '/CreateAuction' component = {CreateAuction}/>

        

          <Route path = '/GemStatus' component = {GemStatus}/>

          <Route path = '/GemWeight' component = {GemWeight}/>

          <Route path = '/GemAmount' component = {GemAmount}/>

         
    

       
   

     

        </Switch>
        
    </Router>
           
    </>
  );
}

export default App;

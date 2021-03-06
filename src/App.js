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
// import UserDashboard from './components/User/UserDashboard'
import CreateAuctionForm from './components/User/Auction/CreateAuctionForm'
import CreateAuction from './components/User/Auction/CreateAuction'
import GemStatus from './components/User/Auction/GemStatus'
import GemWeight from './components/User/Auction/GemWeight'
import GemAmount from './components/User/Auction/GemAmount'
import GemImageUpload from './components/User/Auction/GemImageUpload'
import ManageAuctionHomePage from './components/User/ManageAuction/ManageAuctionHomePage'
import UserDetails from './components/User/ManageAuction/UserDetails'
import SpecialCard from './components/Daily Deals/SpecialCard'
import DailyDealsHome from './components/Daily Deals/DailyDealsHome'
import Chatbot from './components/ChatBot/Chatbot'
import Bid from './components/User/Auction/Bid'
import UserWinningAuction from './components/User/UserWinningAuction'
import PlaceBid from './components/Bid/PlaceBid'
import MainNavbar from './components/Admin_Dashboard/MainNavbar'
import AccountProfileDetails from './components/Admin_Dashboard/Account/AccountProfileDetails'
import AccountProfile from './components/Admin_Dashboard/Account/AccountProfile'
import OpenMenu  from './components/Admin_Dashboard/OpenMenu'
import Mailer from './components/Feedback/mailer'
import Composemail from './components/Feedback/Composemail'
import UserHomePage from './components/User/UserHomePage'
import Timer from './components/CountDownTimer/Timer'
import CountDownTimer from './components/CountDownTimer/CountDownTimer'
import LoginPortal from './components/LoginPortal'
import AdminLoginHomepage from './components/Login/AdminLoginHomepage' 
import AdminLogin from './components/Login/AdminLogin'
import Cart from './components/User/Auction/Cart'
import UserManual from './components/PDF/UserManual'

function App() {
  return (
    <>

    {/* all of the routers */}
    <Router>
      <Chatbot/>
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

          {/* <Route path = '/UserDashboard' component = {UserDashboard}/> */}

          <Route path = '/CreateAuctionForm' component = {CreateAuctionForm}/>
        
          <Route path = '/GemImageUpload' component = {GemImageUpload}/>

          <Route path = '/CreateAuction' component = {CreateAuction}/>

          <Route path = '/ManageAuctionHomePage' component = {ManageAuctionHomePage}/>

          <Route path = '/GemStatus' component = {GemStatus}/>

          <Route path = '/GemWeight' component = {GemWeight}/>

          <Route path = '/GemAmount' component = {GemAmount}/>

          <Route path = '/UserDetails' component = {UserDetails}/>

          <Route path = '/Chatbot' component = {Chatbot}/>
    
          <Route path = '/SpecialCard' component ={SpecialCard}/>
       
          <Route path = '/DailyDealsHome' component = {DailyDealsHome}/>

          <Route path = '/Bid' component = {Bid}/>

          <Route path = '/UserWinningAuction' component = {UserWinningAuction}/>

          <Route path = '/PlaceBid' component = {PlaceBid}/>

          <Route path = '/MainNavbar' component ={MainNavbar}/>

          <Route path = '/AccountProfileDetails' component = {AccountProfileDetails}/>

          <Route path = '/AccountProfile' component = {AccountProfile}/>

          <Route path = '/OpenMenu' component = {OpenMenu}/>

          <router path = '/Mailer' component = {Mailer}/>

          <Route path = '/Composemail' component = {Composemail}/>

          <Route path = '/UserHomePage' component = {UserHomePage}/>

          <Route path = '/Timer' component = {Timer}/>

          <Route path = '/CountDownTimer' component ={CountDownTimer}/>

          <Route path = '/LoginPortal' component = {LoginPortal}/>

          <Route path = '/AdminLoginHomepage' component = {AdminLoginHomepage}/>

          <Route path = '/AdminLogin' component = {AdminLogin}/>

          <Route path = '/Cart' component = {Cart}/>

          <Route path = '/UserManual' component = {UserManual}/>

        </Switch>
        
    </Router>
           
    </>
  );
}

export default App;

import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import bid from './components/pages/Bid'
import Sell from './components/pages/Sell'
import Feedback from './components/Feedback'
import Form from './components/signup/Form'
import SignUpForm from './components/pages/Signup'

import CardDetails from './components/Auctiondetails/CardDetails'
import xls from './components/pages/xls'
import LoginPortal from './components/Login/LoginPortal'
import AdminHomePage from './components/Login/AdminHomePage'
import ValidatedLoginForm from './components/Login/ValidatedLoginForm'
import PasswordReset from './components/Login/PasswordReset'
import Auctionlist from './components/Auctions/Auctionlist'
import Createauction from './components/Auctions/Createauction'
import Createseller from './components/Auctions/Creatseller'
import Editauction from './components/Auctions/Editauction'
import Createbuyer from './components/Auctions/Createbuyer'
import BuyerLoginForm from './components/Login/BuyerLoginForm'
import BuyerHomePage from './components/pages/BuyerHomePage'

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
          <Route path='/bid' component={bid}/>
          {/* Sell page connection */}
          <Route path='/sell' component={Sell}/>
          {/* Login page connection */}
         
          {/* Feddback page connection */}
          <Route path='/Feedback' component={Feedback}/>

          <Route path='/Form' component={Form}/>
          
          <Route path='/SignUpForm' component={SignUpForm}/>

          <Route path='/Createbuyer' component={Createbuyer}/>

          <Route path='/CardDetails' component={CardDetails}/>

          <Route path='/xls' component={xls}/>

          <Route path='/LoginPortal' component={LoginPortal}/>

          <Route path='/AdminHomePage' component={AdminHomePage}/>

          <Route path='/PasswordReset' component={PasswordReset}/>

          <Route path='/ValidatedLoginForm' component={ValidatedLoginForm}/>

          <Route path='/Auctionlist' component={Auctionlist}/>

          <Route path='/Createauction' component={Createauction}/>

          <Route path='/Createseller' component={Createseller}/>

          <Route path='/Editauction' component={Editauction}/>

          <Route path='/BuyerLoginForm' component={BuyerLoginForm}/>

          <Route path='/BuyerHomePage' component={BuyerHomePage}/>

          
          
     
        </Switch>
        
    </Router>
           
    </>
  );
}

export default App;

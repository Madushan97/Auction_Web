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
import CreateAuction from './components/pages/CreateAuction'
import CardDetails from './components/Auctiondetails/CardDetails'
import xls from './components/pages/xls'
import LoginPortal from './components/Login/LoginPortal'
import LoginPage from './components/Login/Login'
import AdminHomePage from './components/Login/AdminHomePage'



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

          <Route path='/CreateAuction' component={CreateAuction}/>

          <Route path='/CardDetails' component={CardDetails}/>

          <Route path='/xls' component={xls}/>

          <Route path='/LoginPortal' component={LoginPortal}/>

          <Route path='/LoginPage' component={LoginPage}/>

          <Route path='AdminHomePage' component={AdminHomePage}/>
          
     
        </Switch>
        
    </Router>
           
    </>
  );
}

export default App;

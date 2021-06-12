import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

import Home from './components/pages/Home'
import bid from './components/pages/Bid'
import Sell from './components/pages/Sell'
import Feedback from './components/Feedback'
import Form from './components/signup/Form'
import Cards from './components/Cards'
import DailyDeals from './components/pages/DailyDeals'
import LoginPage from './components/Login/LoginPage'



// import ConfirmationLog from './components/ConfirmationLog'

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

          <Route path='/Cards' component={Cards}/>

          <Route path='/DailyDeals' component={DailyDeals}/>

          <Route path ='/LoginPage' component={LoginPage}/>

       

          

        </Switch>
        
    </Router>
           
    </>
  );
}

export default App;

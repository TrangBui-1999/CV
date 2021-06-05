import './App.css';
import React from 'react';
import Navbar from './Compontent/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TravelPage from './Compontent/Page/TravelPage';
import DashBoard from './Compontent/Page/DashBoard';
import Blog from './Compontent/Page/Blog';
import SignUp from './Compontent/Page/SignUp';
import Portfolio from './Compontent/Page/Portfolio';
import Footer from './Compontent/Footer/Footer';

function App() {
  return (
   <>
   <Router>
   <Navbar/>
     <Switch>
<Route path='/' exact component={Portfolio}/>
<Route path='/Portfolio' exact component={Portfolio}/>
<Route path='/home' exact component={TravelPage}/>
<Route path='/services' exact component={DashBoard}/>
<Route path='/products' exact component={Blog}/>
<Route path='/sign-up' exact component={SignUp}/>
     </Switch>
     <Footer/>
   </Router>    
    </>
  );
}

export default App;

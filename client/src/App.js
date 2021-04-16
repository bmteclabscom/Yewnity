import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Footer from './components//Footer/Footer';
import Navbar from './components/Navbar/Navbar';
//switched file path - react app works now - Jeff -
import GoogleLogin from './components/googlelogin';
//----------------Jeff additions--------------------//
import EventMain from './components/Event-Main';
import EventMed from './components/Event-Med';
import EventMini from './components/Event-Mini';
import IssueMini from './components/Issue-Mini';
//----------------END Jeff additions--------------------//
import About from './pages/About';

//Landing Hero
import AppHome from './views/home';
import 'bootstrap/dist/css/bootstrap.min.css';

import Profile from './views/profile'


function App() {
  return (
    <>
    <Router>
    <Banner></Banner>
      <Switch>
        <Route path='/' exact component = {AppHome} /> {/*Landing Page*/}
        <Route path='/about' component = {About} />    {/*About Page*/}
        <Route path='/profile' exact component={ Profile } />

      </Switch>
      <IssueMini />
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;

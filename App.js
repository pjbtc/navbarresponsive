import React, { Component } from 'react';

import './App.css';
import Home from './Home';
import Contact from './Contact';
import Blog from './Blog';



//import NavbarRes from './NavbarRes';
//import Navbartest from './Navbartest';
//import Diffstyledpage from './Diffstyledpage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavbarRes from './index.js';

class App extends Component {
  render() {
    return (
      
      <div className="App">
     <div className="header">
        <h1>The responsive weather app with my own codes </h1>
        </div>
        <NavbarRes/>
      

         <Switch>
          <Route path= "/home" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/blog" component={Blog}/>
        </Switch>

        

      
      </div>
    
      
    );
  }
}

export default App;

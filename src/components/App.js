import React from 'react';

import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from 'react-router-dom';

import './style/App.css';

import Homepage from "./Homepage";
import Calculator from "./Calculator";
import Skins from "./Skins";
import Weapons from "./Weapons";
import Footer from "./Footer";
import Menu from "./Menu";
import Error from "./Error";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch >
          <Route exact path="/" render={()=> <Homepage /> }/>
          <Route exact path="/calc" render={()=> <Calculator /> }/>
          <Route exact path="/skins" render={()=> <Skins /> }/>
          <Route exact path="/weapons" render={()=> <Weapons /> }/>
          <Route component={()=> <Error/>}/>
        </Switch>
        <Footer />
        <Menu />
      </div>
    </Router>
  );
}

export default App;

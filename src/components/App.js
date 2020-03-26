import React from 'react';
import './style/App.css';

import { move, resizer, checkDevice } from './Service'

import Homepage from "./Homepage";
import Calculator from "./Calculator";
import Skins from "./Skins";
import Weapons from "./Weapons";
import Ranks from "./Ranks";

class App extends React.Component {
  componentDidMount(){
    // check local storage
    if(!localStorage.getItem("sound")){
      localStorage.setItem("sound" , "ON")
    }

    //sprawdzenie urządzenia
    checkDevice();

    //move to homepage 
    move(window.location.pathname);

    //resizer
    window.addEventListener('resize',  resizer);
  
  }

  
  render(){
    return (
        <div className="App" >
          <table>
            <tbody>
              <tr>
                <td></td> 
                <td><Ranks/></td>
                <td></td> 
              </tr>
              <tr>
                <td><Weapons/></td> 
                <td><Homepage/></td>
                <td><Skins/></td> 
              </tr>
              <tr>
                <td></td> 
                <td><Calculator/></td>
                <td></td> 
              </tr>
            </tbody>
          </table>
          <audio controls autoPlay className="Player" />
          <div  className="Loader-Box">
                   <img className="Loader-Gif" src="/image/animation/Loader.gif" alt="Loader pif"/>
          </div>
          <div className="Locked-Box">
            <div className="Locked-Text"> 
              Orientacja pozioma zablokowana!
            </div>
          </div>
        </div>
    );
  };
}

export default App;

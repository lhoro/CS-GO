import React from 'react';
import './style/App.css';

import Homepage from "./Homepage";
import Calculator from "./Calculator";
import Skins from "./Skins";
import Weapons from "./Weapons";
// import Footer from "./Footer";
import Ranks from "./Ranks";


class App extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    window.scroll(100,100)
  }
  
  render(){
    return (
      <div className="App" >
        <table>
          <tbody>
            <tr>
              <td></td> 
              <td><Ranks /></td>
              <td></td> 
            </tr>
            <tr>
              <td><Weapons /></td> 
              <td><Homepage /></td>
              <td><Skins /></td> 
            </tr>
            <tr>
              <td></td> 
              <td><Calculator /></td>
              <td></td> 
            </tr>
          </tbody>
        </table>
        <audio controls autoPlay className="Player" />
      </div>
    );
  };
}

export default App;

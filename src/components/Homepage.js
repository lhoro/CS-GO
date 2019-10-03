import React from 'react';
import './style/Homepage.css';

import { move, coin_flip } from './Service'

function Homepage() {
  return (
    <div className="Homepage">
      <div className="Image Image1"></div>
      <div className="Image Image2"></div>
      <div className="Image Image3"></div>
      <div className="Image Image4"></div>
      <div className="Circle"></div>
      <div className="Animation-Box" >
        <div className="Coins" onClick={()=>coin_flip()}>
          <div className="Side1 CTT"></div>
          <div className="Side2 TT"></div>
        </div>
      </div>
      <button onClick={()=>move("up")} >UP</button>
      <button onClick={()=>move("down")} >DOWN</button>
      <button onClick={()=>move("left")} >LEFT</button>
      <button onClick={()=>move("right")} >RIGHT</button>
    </div>
  );
}

export default Homepage;

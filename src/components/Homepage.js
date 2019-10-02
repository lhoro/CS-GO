import React from 'react';
import './style/Homepage.css';

import { move } from './Service'

function Homepage() {
  return (
    <div className="Homepage">
      aaa
      <div className="Animation-Box">
        <div className="Coins">
          <div className="CT"></div>
          <div className="TT"></div>
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

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
      <img src="/image/layout/arrowup.png" className="Arrow-Up" alt="arrow" onClick={()=>move("up")} />
      <img src="/image/layout/arrowdown.png" className="Arrow-Down" alt="arrow" onClick={()=>move("down")} />
      <img src="/image/layout/arrowleft.png" className="Arrow-Left" alt="arrow" onClick={()=>move("left")} />
      <img src="/image/layout/arrowright.png" className="Arrow-Right" alt="arrow" onClick={()=>move("right")} />
    </div>
  );
}

export default Homepage;

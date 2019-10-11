import React from 'react';
import './style/Homepage.css';

import { move, coin_flip } from './Service'

function Homepage() {
  return (
    <div className="Homepage">
      <div className="Image Image1"></div>
      <img src="/image/layout/arrowup.png" className="Arrow-Up" alt="arrow" onClick={()=>move("up")} />
      <div className="Image Image2"></div>
      <div className="Empty">
        <img src="/image/layout/arrowleft.png" className="Arrow-Left" alt="arrow" onClick={()=>move("left")} />
        <img src="/image/layout/arrowright.png" className="Arrow-Right" alt="arrow" onClick={()=>move("right")} />
      </div>
      <div className="Image Image3"></div>
        <img src="/image/layout/arrowdown.png" className="Arrow-Down" alt="arrow" onClick={()=>move("down")} />
      <div className="Image Image4"></div>
      <div className="Footer"></div>

      <div className="Circle">
        <div className="Animation-Box" >
          <div className="Coins" onClick={()=>coin_flip()}>
            <div className="Side1 CTT"></div>
            <div className="Side2 TT"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

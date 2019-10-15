import React from 'react';
import './style/Homepage.css';

import { move, coin_flip, sound } from './Service'

function Homepage() {
  let options;
  if(localStorage.getItem("sound")==="ON"){
    options = <div className="Options-Box Sound-ON" onClick={()=>sound()}></div>
  }
  else{
    options = <div className="Options-Box Sound-OFF" onClick={()=>sound()}></div>
  }
    
  return (
    <div className="Homepage">
      <div className="Image Image1"></div>
      <img src="/image/layout/arrowup.png" className="Arrow Arrow-Up" alt="arrow" onClick={()=>move("up")} />
      <div className="Image Image2">
        {options}
      </div>
      <div className="Empty">
        <img src="/image/layout/arrowleft.png" className="Arrow Arrow-Left" alt="arrow" onClick={()=>move("left")} />
        <img src="/image/layout/arrowright.png" className="Arrow Arrow-Right" alt="arrow" onClick={()=>move("right")} />
      </div>
      <div className="Image Image3"></div>
        <img src="/image/layout/arrowdown.png" className="Arrow Arrow-Down" alt="arrow" onClick={()=>move("down")} />
      <div className="Image Image4"></div>

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

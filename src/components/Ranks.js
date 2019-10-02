import React from 'react';
import './style/Ranks.css';

import { move } from './Service';

function Ranks() {
  return (
    <div className="Ranks">
     skins
     <button className="Ranks-Back" onClick={()=>move()}>BACK</button>
    </div>
  );
}

export default Ranks;

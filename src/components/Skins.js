import React from 'react';
import './style/Skins.css';

import { move } from './Service';

function Skins() {
  return (
    <div className="Skins">
    <h3>SKINS</h3>
     <button className="Skins-Back" onClick={()=>move()}>BACK</button>
    </div>
  );
}

export default Skins;

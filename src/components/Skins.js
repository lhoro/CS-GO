import React from 'react';
import './style/Skins.css';

import { move } from './Service';

function Skins() {
  return (
    <div className="Skins">
     skins
     <button className="Skins-Back" onClick={()=>move()}>BACK</button>
    </div>
  );
}

export default Skins;

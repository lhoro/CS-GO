import React from 'react';
import './style/Weapons.css';

import stats from "../data/weapons.json"

function Weapons() {
  return (
    <div className="Weapons">
      {stats.map((item)=>{
        return (<>
           {item.name} <br/>
           <img className="weapon-icon" src={item.img} alt={item.img}/> <br/>
          
        </>)
      })}
    </div>
  );
}

export default Weapons;

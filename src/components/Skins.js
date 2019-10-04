import React from 'react';
import './style/Skins.css';
import skins from "../data/skins.json";

import { move } from './Service';

function Skins() {
  return (
    <div className="Skins">
      <div className="Skins-Title">
        <h2>SKINS</h2>
      </div>
      
      <div className="Skins-Body">
      {skins.map((event,index)=>{
        return(
        <div key={index} >
          <div className="Skins-img&float" >
            <p>{event.name_weapon} | {event.name_skin}</p>
          </div>
          <div className="Skins-cost&float">

          </div>
        </div>
        )
      })}
      </div>

      <button className="Skins-Back" onClick={()=>move()}>BACK</button>
    </div>
  );
}

export default Skins;

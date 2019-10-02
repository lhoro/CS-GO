import React from 'react';
import './style/Weapons.css';

import { play,move } from './Service'

import stats from "../data/weapons.json"

function Weapons() {
  return (
    <div className="Weapons"> 
      <button className="Weapon-Back" onClick={()=>move()}>BACK</button>
      {stats.map((item)=>{
        return (
        <div className="Weapon" key={item.name} >
          <div className="Weapon-Stats1">
            <div className="Weapon-Name" >{item.name}</div>
            Team: <span className="Value" >{item.team}</span> <br/>
            Price: <span className="Value" >{item.cost}</span> <br/>
            Kill award: <span className="Value" >{item.kill_award}</span> <br/>
            Kills to rebuy: <span className="Value" >{item.kills_to_rebuy}</span>
          </div>
          <img className="Weapon-Icon" src={item.img} onClick={()=>play(item.sound)} alt="Weapon"/>
          <div className="Weapon-Stats2">
            <div className="Weapon-Stats2-Box1">
              Damage: <span className="Value" >{item.damage}</span> <br/>
              DPS: <span className="Value" >{item.dps}</span> <br/>
              Penetration: <span className="Value" >{item.armor_penetration}</span> <br/>
              Max ammo: <span className="Value" >{item.max_ammo}</span> <br/>
              Max range: <span className="Value" >{item.max_range}</span> <br/>
              Clip size: <span className="Value" >{item.clip_size}</span> <br/>
            </div>
            <div className="Weapon-Stats2-Box2">
              Speed: <span className="Value" >{item.max_speed}</span> <br/>
              Clip reload: <span className="Value" >{item.reload_cr}</span> <br/>
              Reload Animation: <span className="Value" >{item.reload_fr}</span> <br/>
              Spread: <span className="Value" >{item.spread}</span> <br/>
              Spread stand: <span className="Value" >{item.spread_stand}</span> <br/>
              Spread crouch: <span className="Value" >{item.spread_crouch}</span> <br/>
            </div>
          </div>
        </div>)
      })}
    </div>
  );
}

export default Weapons;

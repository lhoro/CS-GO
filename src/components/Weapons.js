import React from 'react';
import './style/Weapons.css';

import { play,move} from './Service'

import weapons from "../data/weapons.json"

class Weapons extends React.Component {
  constructor(){
    super()
    this.state =({
      weapons: [],
      sort:"Name",
      show:"All",
      mode:"To worst",
    })
  }

  componentDidMount(){
      this.setState({
        weapons 
      })
    // axios.get('/CSGO/values/eur').then(
    //   (res)=>{
    //     console.log(res.data)
    //   }).catch(()=>{
    //     console.log("Problem z pobaniem danych walut");
    //   })
  }
  
  sort = (e) =>{
    const type = e.currentTarget.value;
    const length = this.state.weapons.length;
    let we = [...this.state.weapons];
    if(type==="DMG"){
      for(let j = 0;  j < length + 1; j++){
        for(let i = 1; i < length; i++){
          if(parseInt(we[i-1].damage) > parseInt(we[i].damage)){
            let pom = we[i-1];
            we[i-1] = we[i];
            we[i] = pom;
          }  
        }
      }
    }
    else if(type==="DPS"){
      for(let j = 0;  j < length + 1; j++){
        for(let i = 1; i < length; i++){
          if(parseInt(we[i-1].dps) > parseInt(we[i].dps)){
            let pom = we[i-1];
            we[i-1] = we[i];
            we[i] = pom;
          }   
        }
      }
    }
    else if(type==="Speed"){
      for(let j = 0;  j < length + 1; j++){
        for(let i = 1; i < length; i++){
          if(parseInt(we[i-1].max_speed) > parseInt(we[i].max_speed)){
            let pom = we[i-1];
            we[i-1] = we[i];
            we[i] = pom;
          }   
        }
      }
    }

    if(this.state.mode === "To worst"){
      we.reverse()
    }

    this.setState({
      weapons : we,
      sort : type,
    })
  }

  mode = (e) => {
    let current = e.currentTarget.value;
    let we = [...this.state.weapons]
    if(current !== this.state.mode){
      we.reverse();
    }

    this.setState({
      weapons : we,
      mode : current,
    })
  }

  show = (e) =>{
    const type = e.currentTarget.value;
    this.setState({
      show: type,
    })
  }

  render(){
    return (<>
      <div className="Weapons"> 
      <div className="Weapons-Title">
        <img src="/image/layout/logo.png"  className="Weapons-Title-CS-IMG" alt="we lost this img"/>
        <h3 className="Ranks-Box-Title">CS:GO WEAPONS</h3>
        <div className="Sort">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="Sort-Title"> Sort by: </div>
              </td>
              <td>
                <select className="Sort-Select" name="sort" onChange={this.sort} value={this.state.sort}>   
                  <option>Name</option>
                  <option>DMG</option>
                  <option>DPS</option>
                  <option>Speed</option>
                </select>
              </td> 
            </tr>
            <tr>
              <td>
                <div className="Sort-Title"> Show:</div>
              </td>
              <td>
                <select className="Sort-Select" name="type"  onChange={this.show} value={this.state.show}>
                  <option>All</option>
                  <option>Pistol</option>
                  <option>SMG</option>
                  <option>Rifle</option>
                  <option>Heavy</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <div className="Sort-Title"> Mode: </div>
              </td>
              <td>
                <select className="Sort-Select" name="mode" onChange={this.mode} value={this.state.mode}>
                  <option>To best</option>
                  <option>To worst</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      <button className="Weapon-Back" onClick={()=>move()}>BACK</button>
        
        
        {this.state.weapons.map((item)=>{
          let bg = "";
          if(item.team==="CT")
            bg="Weapon Weapon-CT-BG"
          else if(item.team==="TT")
            bg="Weapon Weapon-TT-BG"
          else
            bg="Weapon Weapon-CT-TT-BG";

          if((item.type.indexOf(this.state.show)>-1) || this.state.show==="All"){
            return (
            <div className={bg} key={item.name} >
              <div className="Weapon-Stats1">
                <div className="Weapon-Name" >{item.name}</div>
                <div className="Weapon-Stats1-Box1" >
                  Team: <span className="Value" >{item.team}</span> <br/>
                  Price: <span className="Value" >{item.cost}</span> <br/>
                  Kill award: <span className="Value" >{item.kill_award}</span> <br/>
                  Kills to rebuy: <span className="Value" >{item.kills_to_rebuy}</span>
                </div>
              </div>
              <img className="Weapon-Icon" src={item.img} onClick={()=>play(item.sound)} alt="Weapon"/>
              <div className="Weapon-Stats2">
                <div className="Weapon-Stats2-Box1">
                  Damage: <span className="Value" >{item.damage}</span> <br/>
                  DPS: <span className="Value" >{item.dps}</span> <br/>
                  Penetration: <span className="Value" >{item.armor_penetration}</span> <br/>
                  Clip size: <span className="Value" >{item.clip_size}</span> <br/>
                  Max ammo: <span className="Value" >{item.max_ammo}</span> <br/>
                  Max range: <span className="Value" >{item.max_range}</span> <br/>
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
          }
          else return null;
        })}
      </div>
      </>
    );
  }
}

export default Weapons;
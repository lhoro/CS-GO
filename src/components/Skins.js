import React from 'react';
import './style/Skins.css';
import skins from "../data/skins.json";

import { move, float_skin, def_float } from './Service';

class Skins extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      skins:[],
      skinsSearch:[],
      searchValue:"",
    }
}
componentDidMount(){
  this.setState({
    skins
  })
}


  searchSkins = (e)=>{
   const valueSearch =  e.currentTarget.value;
   console.log(valueSearch)
   this.setState({
     searchValue: valueSearch,
   })
  
    this.state.skins.map(event =>{
      const nameSkinWeapon = event.name_weapon+event.name_skin;
       if(event.name_skin.indexOf(valueSearch)>-1){
          this.state.skinsSearch.push(event);
          this.setState({
            skinsSearch: this.state.skinsSearch,
          })
       }
     })
   
  
  }


  render(){
    let list = {};
    if(this.state.searchValue===""){
      list =  this.state.skins;
    }
    else{
      list =  this.state.skinsSearch;
    }
    return (
      <div className="Skins">
        <div className="Skins-Title">
          <h2>SKINS</h2>
        </div>
        <div className="Search-input">
          <input type="text" placeholder="name skin..." onChange={this.searchSkins.bind(this)}/>
        </div>
        
        <div className="Skins-Body">
        {list.map((event,index)=>{
          let colorSkin= {
            color: event.skin_color
          }
          return(
          <div className="One-Skin" key={index} >
             <p className="One-Skin-Name" style={colorSkin}>{event.name_weapon} | {event.name_skin}</p>
            <div className="Skins-img_float" >
              <img id={event.name_weapon+event.name_skin}  className="Skins-img" src={event.img_skin} alt="sorry error this skin img"/>
              <div className="Buttons-float">
                  {(event.cost_factory !== "Not Possible"?<button className="Skin-float-bt fn-button" onMouseOver={() => {float_skin(event,"fn")}} onMouseOut={()=>{def_float(event)}}>Factory New</button>:null)}
                  {(event.cost_minimal !== "Not Possible"?<button className="Skin-float-bt mw-button" onMouseOver={() => {float_skin(event,"mw")}} onMouseOut={()=>{def_float(event)}}>Minimal Wear</button>:null)}
                  {(event.cost_field !== "Not Possible"?<button className="Skin-float-bt ft-button" onMouseOver={() => {float_skin(event,"ft")}}   onMouseOut={()=>{def_float(event)}}>Field-Test</button>:null)}
                  {(event.cost_wellworm !== "Not Possible"?<button className="Skin-float-bt ww-button" onMouseOver={() => {float_skin(event,"ww")}}onMouseOut={()=>{def_float(event)}}>Well-Worm</button>:null)}
                  {(event.cost_battle !== "Not Possible"?<button className="Skin-float-bt bs-button" onMouseOver={() => {float_skin(event,"bs")}}  onMouseOut={()=>{def_float(event)}}>Battle_Scarred</button>:null)}
              </div>
            </div>
            <div className="Skins-cost_float">
              <p className="Skins-cost-shadow"><span>StatTrack</span> Factory New:<span className="price_skin">{event.st_cost_factory} $</span></p>
              <p><span>StatTrack</span> Minimal Wear:<span className="price_skin">{event.st_cost_minimal} $</span></p>
              <p className="Skins-cost-shadow"><span>StatTrack</span> Field-Test:<span className="price_skin">{event.st_cost_field} $</span></p>
              <p ><span>StatTrack</span> Well-Worm:<span className="price_skin">{event.st_cost_wellworm} $</span></p>
              <p className="Skins-cost-shadow"><span>StatTrack</span> Battle-Scarred:<span className="price_skin">{event.st_cost_battle} $</span></p>
              <p>Factory New:<span className="price_skin">{event.cost_factory} $</span></p>
              <p className="Skins-cost-shadow">Minimal Wear:<span className="price_skin">{event.cost_minimal} $</span></p>
              <p>Field-Test:<span className="price_skin">{event.cost_field} $</span></p>
              <p className="Skins-cost-shadow">Well-Worm:<span className="price_skin">{event.cost_wellworm}$</span></p>
              <p>Battle-Scarred:<span className="price_skin">{event.cost_battle} $</span></p>
            </div>
          </div>
          )
        })}
        </div>
  
        <button className="Skins-Back" onClick={()=>move()}>BACK</button>
      </div>
    );
  }
}

export default Skins;

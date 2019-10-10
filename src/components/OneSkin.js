import React from 'react';

const OneSkin = (props) =>{

  return(
<div className="One-Skin" key={props.index} >
 
  <div className="Skins-img_float" >
  <p className="One-Skin-Name" style={props.colorSkin}>{props.event.name_weapon} | {props.event.name_skin}</p>
    <img id={props.event.name_weapon+props.event.name_skin}  className="Skins-img" src={props.event.img_skin} alt="sorry error this skin img"/>
    <div className="Buttons-float">
      {(props.event.cost_factory !== "Not Possible"?<button className="Skin-float-bt fn-button" onMouseOver={() => {props.float_skin(props.event,"fn")}} onMouseOut={()=>{props.def_float(props.event)}}>Factory New</button>:null)}
      {(props.event.cost_minimal !== "Not Possible"?<button className="Skin-float-bt mw-button" onMouseOver={() => {props.float_skin(props.event,"mw")}} onMouseOut={()=>{props.def_float(props.event)}}>Minimal Wear</button>:null)}
      {(props.event.cost_field !== "Not Possible"?<button className="Skin-float-bt ft-button" onMouseOver={() => {props.float_skin(props.event,"ft")}}   onMouseOut={()=>{props.def_float(props.event)}}>Field-Test</button>:null)}
      {(props.event.cost_wellworm !== "Not Possible"?<button className="Skin-float-bt ww-button" onMouseOver={() => {props.float_skin(props.event,"ww")}}onMouseOut={()=>{props.def_float(props.event)}}>Well-Worm</button>:null)}
      {(props.event.cost_battle !== "Not Possible"?<button className="Skin-float-bt bs-button" onMouseOver={() => {props.float_skin(props.event,"bs")}}  onMouseOut={()=>{props.def_float(props.event)}}>Battle_Scarred</button>:null)}
    </div>
  </div>
  <div className="Skins-cost_float">
    <p className="Skins-cost-shadow"><span>StatTrack</span> Factory New:<span className="price_skin">{(props.event.st_cost_factory!== "Not Possible")? props.event.st_cost_factory+" "+props.valute : props.event.st_cost_factory} </span></p>
    <p><span>StatTrack</span> Minimal Wear:<span className="price_skin">{(props.event.st_cost_minimal!== "Not Possible")? props.event.st_cost_minimal+" "+props.valute : props.event.st_cost_minimal}</span></p>
    <p className="Skins-cost-shadow"><span>StatTrack</span> Field-Test:<span className="price_skin">{(props.event.st_cost_field!== "Not Possible")? props.event.st_cost_field+" "+props.valute : props.event.st_cost_field}</span></p>
    <p ><span>StatTrack</span> Well-Worm:<span className="price_skin">{(props.event.st_cost_wellworm !== "Not Possible")? props.event.st_cost_wellworm+" "+props.valute : props.event.st_cost_wellworm} </span></p>
    <p className="Skins-cost-shadow"><span>StatTrack</span> Battle-Scarred:<span className="price_skin">{(props.event.st_cost_battle !== "Not Possible")? props.event.st_cost_battle+" "+props.valute : props.event.st_cost_battle}</span></p>
    <p>Factory New:<span className="price_skin">{(props.event.cost_factory !== "Not Possible")? props.event.cost_factory+" "+props.valute : props.event.cost_factory} </span></p>
    <p className="Skins-cost-shadow">Minimal Wear:<span className="price_skin">{(props.event.cost_minimal!== "Not Possible")? props.event.cost_minimal+" "+props.valute : props.event.cost_minimal}</span></p>
    <p>Field-Test:<span className="price_skin">{(props.event.cost_field!== "Not Possible")? props.event.cost_field+" "+props.valute : props.event.cost_field}</span></p>
    <p className="Skins-cost-shadow">Well-Worm:<span className="price_skin">{(props.event.cost_wellworm !== "Not Possible")? props.event.cost_wellworm+" "+props.valute : props.event.cost_wellworm} </span></p>
    <p>Battle-Scarred:<span className="price_skin">{(props.event.cost_battle !== "Not Possible")? props.event.cost_battle+" "+props.valute : props.event.cost_battle}</span></p>
  </div>
</div>
  )

}
export default OneSkin
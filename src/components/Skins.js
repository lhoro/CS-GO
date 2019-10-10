import React from 'react';
import './style/Skins.css';
import skins from "../data/skins.json";
import OneSkin from './OneSkin.js'
import Valute from './Valute.js'

import { move, float_skin, def_float } from './Service';

class Skins extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      skins:[],
      searchValue:"",
      valute: "EUR",
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
  }


  render(){
    return (
      <div className="Skins">
        <div className="Skins-Title">
          <h2>SKINS</h2>
        </div>
          <div className="Form-Search">
            <form className="Search-input">
              <input  onChange={this.searchSkins.bind(this)} className="Search-Skin-input" type="text" required ></input>
              <label className="Search-input-label" placeholder="looking for :" alt="find skin">
              </label>
            </form>
          </div>
          <div className="Select-valute">
          <Valute valute={this.state.valute}/>
          </div>
        <div className="Skins-Body">
        {this.state.skins.map((event,index)=>{
          let colorSkin= {
            color: event.skin_color
          }
          const nameSkin = event.name_weapon+event.name_skin.toUpperCase()
          if(nameSkin.indexOf(this.state.searchValue.toUpperCase()) > -1){
            return(
              <OneSkin event={event} index={index}  float_skin={float_skin}  def_float={def_float} colorSkin={colorSkin} valute={this.state.valute} />
              )
          }else{
            return '';
          }
          
        })}
        </div>
  
        <button className="Skins-Back" onClick={()=>move()}>BACK</button>
      </div>
    );
  }
}

export default Skins;



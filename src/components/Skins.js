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
      valute: "USD",
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
  changeValute = (PLN_EUR,PLN_USD,e) =>{

    const actualyValute = e.currentTarget.value
    if(this.state.valute==="PLN" && actualyValute === 'EUR'){
      this.state.skins.map(event =>{
        if(event.st_cost_factory!== "Not Possible"){event.st_cost_factory = (event.st_cost_factory/PLN_EUR).toFixed(2)}
        if(event.st_cost_minimal!== "Not Possible"){event.st_cost_minimal = (event.st_cost_minimal/PLN_EUR).toFixed(2)}
        if(event.st_cost_field!== "Not Possible"){event.st_cost_field= (event.st_cost_field/PLN_EUR).toFixed(2)}
        if(event.st_cost_wellworm!== "Not Possible"){event.st_cost_wellworm = (event.st_cost_wellworm/PLN_EUR).toFixed(2) }
        if(event.st_cost_battle!== "Not Possible"){event.st_cost_battle = (event.st_cost_battle/PLN_EUR).toFixed(2)}
        if(event.cost_factory!== "Not Possible"){event.cost_factory = (event.cost_factory/PLN_EUR).toFixed(2)}
        if(event.cost_minimal!== "Not Possible"){event.cost_minimal = (event.cost_minimal/PLN_EUR).toFixed(2)} 
        if(event.cost_field!== "Not Possible"){event.cost_field= (event.cost_field/PLN_EUR).toFixed(2)}
        if(event.cost_wellworm!== "Not Possible"){event.cost_wellworm = (event.cost_wellworm/PLN_EUR).toFixed(2)}
        if(event.cost_battle!== "Not Possible"){event.cost_battle = (event.cost_battle/PLN_EUR).toFixed(2)}
        this.setState({
          valute: "EUR",
          skins: this.state.skins
        })
        return 0;
     })

    }else if(this.state.valute==="EUR" && actualyValute === 'PLN'){
      this.state.skins.map(event =>{
        if(event.st_cost_factory!== "Not Possible"){event.st_cost_factory = (event.st_cost_factory*PLN_EUR).toFixed(2)}
        if(event.st_cost_minimal!== "Not Possible"){event.st_cost_minimal = (event.st_cost_minimal*PLN_EUR).toFixed(2)}
        if(event.st_cost_field!== "Not Possible"){event.st_cost_field= (event.st_cost_field*PLN_EUR).toFixed(2)}
        if(event.st_cost_wellworm!== "Not Possible"){event.st_cost_wellworm = (event.st_cost_wellworm*PLN_EUR).toFixed(2) }
        if(event.st_cost_battle!== "Not Possible"){event.st_cost_battle = (event.st_cost_battle*PLN_EUR).toFixed(2)}
        if(event.cost_factory!== "Not Possible"){event.cost_factory = (event.cost_factory*PLN_EUR).toFixed(2)}
        if(event.cost_minimal!== "Not Possible"){event.cost_minimal = (event.cost_minimal*PLN_EUR).toFixed(2)} 
        if(event.cost_field!== "Not Possible"){event.cost_field= (event.cost_field*PLN_EUR).toFixed(2)}
        if(event.cost_wellworm!== "Not Possible"){event.cost_wellworm = (event.cost_wellworm*PLN_EUR).toFixed(2)}
        if(event.cost_battle!== "Not Possible"){event.cost_battle = (event.cost_battle*PLN_EUR).toFixed(2)}
        this.setState({
          valute: "PLN",
          skins: this.state.skins
        })
        return 0;
     })

    }else if(this.state.valute==="PLN" && actualyValute === 'USD'){
      this.state.skins.map(event =>{
        if(event.st_cost_factory!== "Not Possible"){event.st_cost_factory = (event.st_cost_factory/PLN_USD).toFixed(2)}
        if(event.st_cost_minimal!== "Not Possible"){event.st_cost_minimal = (event.st_cost_minimal/PLN_USD).toFixed(2)}
        if(event.st_cost_field!== "Not Possible"){event.st_cost_field= (event.st_cost_field/PLN_USD).toFixed(2)}
        if(event.st_cost_wellworm!== "Not Possible"){event.st_cost_wellworm = (event.st_cost_wellworm/PLN_USD).toFixed(2) }
        if(event.st_cost_battle!== "Not Possible"){event.st_cost_battle = (event.st_cost_battle/PLN_USD).toFixed(2)}
        if(event.cost_factory!== "Not Possible"){event.cost_factory = (event.cost_factory/PLN_USD).toFixed(2)}
        if(event.cost_minimal!== "Not Possible"){event.cost_minimal = (event.cost_minimal/PLN_USD).toFixed(2)} 
        if(event.cost_field!== "Not Possible"){event.cost_field= (event.cost_field/PLN_USD).toFixed(2)}
        if(event.cost_wellworm!== "Not Possible"){event.cost_wellworm = (event.cost_wellworm/PLN_USD).toFixed(2)}
        if(event.cost_battle!== "Not Possible"){event.cost_battle = (event.cost_battle/PLN_USD).toFixed(2)}
        this.setState({
          valute: "USD",
          skins: this.state.skins
        })
        return 0;
     })

    }else if(this.state.valute==="USD" && actualyValute === 'PLN'){
      this.state.skins.map(event =>{
        if(event.st_cost_factory!== "Not Possible"){event.st_cost_factory = (event.st_cost_factory*PLN_USD).toFixed(2)}
        if(event.st_cost_minimal!== "Not Possible"){event.st_cost_minimal = (event.st_cost_minimal*PLN_USD).toFixed(2)}
        if(event.st_cost_field!== "Not Possible"){event.st_cost_field= (event.st_cost_field*PLN_USD).toFixed(2)}
        if(event.st_cost_wellworm!== "Not Possible"){event.st_cost_wellworm = (event.st_cost_wellworm*PLN_USD).toFixed(2) }
        if(event.st_cost_battle!== "Not Possible"){event.st_cost_battle = (event.st_cost_battle*PLN_USD).toFixed(2)}
        if(event.cost_factory!== "Not Possible"){event.cost_factory = (event.cost_factory*PLN_USD).toFixed(2)}
        if(event.cost_minimal!== "Not Possible"){event.cost_minimal = (event.cost_minimal*PLN_USD).toFixed(2)} 
        if(event.cost_field!== "Not Possible"){event.cost_field= (event.cost_field*PLN_USD).toFixed(2)}
        if(event.cost_wellworm!== "Not Possible"){event.cost_wellworm = (event.cost_wellworm*PLN_USD).toFixed(2)}
        if(event.cost_battle!== "Not Possible"){event.cost_battle = (event.cost_battle*PLN_USD).toFixed(2)}
        this.setState({
          valute: "PLN",
          skins: this.state.skins
        })
        return 0;
     })

    }else if(this.state.valute==="EUR" && actualyValute === 'USD'){
      this.state.skins.map(event =>{
        if(event.st_cost_factory!== "Not Possible"){event.st_cost_factory = (event.st_cost_factor*PLN_EUR/PLN_USD).toFixed(2)}
        if(event.st_cost_minimal!== "Not Possible"){event.st_cost_minimal = (event.st_cost_minimal*PLN_EUR/PLN_USD).toFixed(2)}
        if(event.st_cost_field!== "Not Possible"){event.st_cost_field= (event.st_cost_field*PLN_EUR/PLN_USD).toFixed(2)}
        if(event.st_cost_wellworm!== "Not Possible"){event.st_cost_wellworm = (event.st_cost_wellworm*PLN_EUR/PLN_USD).toFixed(2) }
        if(event.st_cost_battle!== "Not Possible"){event.st_cost_battle = (event.st_cost_battle*PLN_EUR/PLN_USD).toFixed(2)}
        if(event.cost_factory!== "Not Possible"){event.cost_factory = (event.cost_factory*PLN_EUR/PLN_USD).toFixed(2)}
        if(event.cost_minimal!== "Not Possible"){event.cost_minimal = (event.cost_minimal*PLN_EUR/PLN_USD).toFixed(2)} 
        if(event.cost_field!== "Not Possible"){event.cost_field= (event.cost_field*PLN_EUR/PLN_USD).toFixed(2)}
        if(event.cost_wellworm!== "Not Possible"){event.cost_wellworm = (event.cost_wellworm*PLN_EUR/PLN_USD).toFixed(2)}
        if(event.cost_battle!== "Not Possible"){event.cost_battle = (event.cost_battle*PLN_EUR/PLN_USD).toFixed(2)}
        this.setState({
          valute: "USD",
          skins: this.state.skins
        })
        return 0;
     })

    }else if(this.state.valute==="USD" && actualyValute === 'EUR'){
      this.state.skins.map(event =>{
        if(event.st_cost_factory!== "Not Possible"){event.st_cost_factory = (event.st_cost_factory*PLN_USD/PLN_EUR).toFixed(2)}
        if(event.st_cost_minimal!== "Not Possible"){event.st_cost_minimal = (event.st_cost_minimal*PLN_USD/PLN_EUR).toFixed(2)}
        if(event.st_cost_field!== "Not Possible"){event.st_cost_field= (event.st_cost_field*PLN_USD/PLN_EUR).toFixed(2)}
        if(event.st_cost_wellworm!== "Not Possible"){event.st_cost_wellworm = (event.st_cost_wellworm*PLN_USD/PLN_EUR).toFixed(2) }
        if(event.st_cost_battle!== "Not Possible"){event.st_cost_battle = (event.st_cost_battle*PLN_USD/PLN_EUR).toFixed(2)}
        if(event.cost_factory!== "Not Possible"){event.cost_factory = (event.cost_factory*PLN_USD/PLN_EUR).toFixed(2)}
        if(event.cost_minimal!== "Not Possible"){event.cost_minimal = (event.cost_minimal*PLN_USD/PLN_EUR).toFixed(2)} 
        if(event.cost_field!== "Not Possible"){event.cost_field= (event.cost_field*PLN_USD/PLN_EUR).toFixed(2)}
        if(event.cost_wellworm!== "Not Possible"){event.cost_wellworm = (event.cost_wellworm*PLN_USD/PLN_EUR).toFixed(2)}
        if(event.cost_battle!== "Not Possible"){event.cost_battle = (event.cost_battle*PLN_USD/PLN_EUR).toFixed(2)}
        this.setState({
          valute: "EUR",
          skins: this.state.skins
        })
        return 0;
     })

    }
    }
  


  render(){
    return (
      <div className="Skins">
        <div className="Select-valute">
          <Valute changeValute={this.changeValute.bind(this)}  fromValute="Skins-Valute"/>
        </div>
        <div className="Skins-Title">
        <img src="/image/layout/logo.png"  className="Ranks-LogoCS-IMG" alt="we lost this img"/>
          <h3 className="Skins-Title-Text">SKINS</h3>
          <div className="Form-Search">
            <form className="Search-input">
              <input  onChange={this.searchSkins.bind(this)} className="Search-Skin-input" type="text" required ></input>
              <label className="Search-input-label" placeholder="looking for :" alt="find skin">
              </label>
            </form>
          </div>
        </div>
      
        <div className="Skins-Body">
        {this.state.skins.map((event,index)=>{
          let colorSkin= {
            color: event.skin_color
          }
          const nameSkin = event.name_weapon+" "+event.name_skin.toUpperCase()
          if(nameSkin.indexOf(this.state.searchValue.toUpperCase()) > -1){
            return(
              <div className="Box-OneSkin" key={index}>
                <OneSkin event={event} indexKey={index}  float_skin={float_skin}  def_float={def_float} colorSkin={colorSkin} valute={this.state.valute} />
              </div> 
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



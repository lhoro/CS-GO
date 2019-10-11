import React from 'react';
import axios from "axios";

class Valute extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      PLN_EUR : 0,
      PLN_USD : 0,
    }
}
componentDidMount(){
  axios.get('/CSGO/values/eur').then(
        (res)=>{
          this.setState({
            PLN_EUR: parseInt(res.data)
          })
        }).catch(()=>{
          console.log("Problem z pobaniem danych");
        })

  axios.get('/CSGO/values/usd').then(
    (res)=>{
      this.setState({
        PLN_USD: parseInt(res.data)
      })
    }).catch(()=>{
      console.log("Problem z pobaniem danych");
    })      
}
  render(){
    return(
      <select id={this.props.fromValute} className="Valute-Choise" onChange ={this.props.changeValute.bind(this,this.state.PLN_EUR,this.state.PLN_USD,this.state.EUR_USD)}>
        <option>PLN</option>
        <option>EUR</option>
        <option selected>USD</option>
      </select>
    )
  }
}
export default Valute


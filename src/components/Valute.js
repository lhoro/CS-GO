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
  axios.get('http://api.nbp.pl/api/exchangerates/rates/A/EUR/').then(
        (res)=>{
          this.setState({
            PLN_EUR: parseInt(res.data.rates[0].mid)
          })
        }).catch(()=>{
          console.log("Problem z pobaniem danych");
        })

  axios.get('http://api.nbp.pl/api/exchangerates/rates/A/USD/').then(
    (res)=>{
      this.setState({
        PLN_USD: parseInt(res.data.rates[0].mid)
      })
    }).catch(()=>{
      console.log("Problem z pobaniem danych");
    })      
}

  render(){
    return(
      <select  defaultValue="USD" id={this.props.fromValute} className="Valute-Choise" onChange ={this.props.changeValute.bind(this,this.state.PLN_EUR,this.state.PLN_USD)}>
        <option>PLN</option>
        <option>EUR</option>
        <option>USD</option>
      </select>
    )
  }
}
export default Valute


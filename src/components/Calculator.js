import React from 'react';
import './style/Calculator.css';


class Calculator extends React.Component {
  constructor(props){
      super(props);
      this.state ={
        soult: 0,
        numb: 1,
        steamProv: 0,
        item: [],
        summary: 0
      }
  }


 money = () =>{
    const cost = document.querySelector('#cost').value
    const val = document.querySelector('#quantity').value
    if(val > 0){
      this.setState({
        soult: cost*(val)-cost*(val)*15/100,
        steamProv:cost*(val)*15/100
      })
    }else{
      this.setState({
        soult: cost*(this.state.numb)-cost*(this.state.numb)*15/100,
        steamProv:cost*(this.state.numb)*15/100
      })
    }
    return 0;
   }



   addItem = () =>{
    const cost = document.querySelector('#cost').value
    const val = document.querySelector('#quantity').value
    
    if(val>0){
      const obj = {cena:cost,ilosc:val}
      this.state.item.push(obj)
      this.setState({
        item: this.state.item
      })
      document.querySelector('#cost').value = ''
      document.querySelector('#quantity').value = ''
    }else{
      const obj = {cena:cost,ilosc:'1'}
      this.state.item.push(obj)
      this.setState({
        item: this.state.item
      })
    }

    this.state.item.map(event =>{
      const sumOneItem = event.cena*event.ilosc
      console.log(sumOneItem)
      this.setState({
        summary: this.state.summary + sumOneItem
      })
      return 0;
   })
  }

  moneyAll = () =>{
   this.state.item.map(event =>{
      const sumOneItem = event.cena*event.ilosc
      console.log(sumOneItem)
      this.setState({
        summary: this.state.summary + sumOneItem
      })
      return 0;
   })
  
   }

   render(){
     return(
    <div>
      <table className= 'table-item'  border="0">
        <tr>
          <th>l.p.</th>
        <th className="title-cost" >CENA</th>
        <th className="title-quantity">ILOŚĆ</th>
        </tr>

          {this.state.item.map((event,index) => {
            return(
              <tr className={index%2===0?'color1': 'color2'}>
            <td key={index} id={index + 1} >{index+1}</td>
            <td>{event.cena} zł</td>
            <td>{event.ilosc} szt.</td>
            </tr>
            )
          })}
        
       </table>
      <input id='cost' placeholder="Cena"/>
      <span>x</span>
      <input type='number' id='quantity' placeholder="1" />
      <button onClick = {this.addItem.bind(this)}>dodaj item</button>
      <button className= 'button-s'onClick={this.money.bind(this)}> Sprawdź</button>
      <br/>
      
      <p>soult: {this.state.soult} zł</p>
      <p>steam provision: {this.state.steamProv} zł</p>
      <button onClick={this.moneyAll.bind(this)}> Sprawdź wszystkie</button>
      <h1>{this.state.summary}</h1>
    </div>
     )
    
   }

}
export default Calculator;

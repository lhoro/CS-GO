import React from 'react';
import './style/Calculator.css';


class Calculator extends React.Component {
  constructor(props){
      super(props);
      this.state ={
        soult: 0,
        numb: 1,
        numb2: 0,
        steamProv: 0,
        item: [],
        summary: 0,
        actualyLength : 0,
        valute: 'PLN'
      }
  }
  componentDidUpdate(){
    this.valueAllItem.bind(this)
  }


 money = () =>{
    const cost = document.querySelector('#cost').value
    const val = document.querySelector('#quantity').value
    if(val > 0){
      this.setState({
        soult: cost*(val)-cost*(val)*15/100,
        steamProv:cost*(val)*15/100,
        numb2: 1
      })
    }else{
      this.setState({
        soult: cost*(this.state.numb)-cost*(this.state.numb)*15/100,
        steamProv:cost*(this.state.numb)*15/100,
        numb2: 1

      })
    }
    this.valueOneItem()
   }



   addItem = () =>{
    const cost = document.querySelector('#cost').value
    const val = document.querySelector('#quantity').value
    
    if(val>0){
      const obj = {cena:cost,ilosc:val}
      this.state.item.push(obj)
      this.setState({
        item: this.state.item,
        numb2: 0
      })
    }else{
      const obj = {cena:cost,ilosc:'1'}
      this.state.item.push(obj)
      this.setState({
        item: this.state.item,
        numb2: 0
      })
    } 
    document.querySelector('#cost').value = ''
    document.querySelector('#quantity').value = '' 
  }

  moneyAll = () =>{
    if(this.state.item.length > 0){
      let sum = 0
      this.state.item.map(event =>{
        const sumOneItem = event.cena*event.ilosc
        sum = sum + sumOneItem;
        return 0;
     })
     this.setState({
      summary:  sum ,
      numb2: 0
    })
    }else{
      return 0;
    }
      
   }
   valueAllItem = ()=>{
     if(this.state.summary > 0){
      return(
        <>
        <p>value all your item: {this.state.summary} {this.state.valute} </p>
        <p>soult all your item: {this.state.summary-this.state.summary*15/100} {this.state.valute}</p>
        <p>steam provision all your item: {this.state.summary*15/100} {this.state.valute}</p>
        </>
       )
     }else{
       return '';
     }
     
   }

   valueOneItem = () =>{
     if(this.state.numb2>0){
     return (
      <>
        <p>soult: {this.state.soult} {this.state.valute}</p>
        <p>steam provision: {this.state.steamProv} {this.state.valute}</p>
      </>
     )
   }else{
    return '';
   }
  }

  changeValute = (e) =>{
    const actualyValute = e.currentTarget.value
    if(this.state.valute=="PLN" && actualyValute == 'EUR'){
      const cost = document.querySelector('#cost').value*0.228 
      document.querySelector('#cost').value =  cost.toFixed(2)
      this.state.item.map(event =>{
        const newCost = event.cena*0.228
        event.cena = newCost.toFixed(2)
     })
    }else if (this.state.valute=="EUR" && actualyValute == 'PLN'){
      const cost = document.querySelector('#cost').value*4.382
      document.querySelector('#cost').value =  cost.toFixed(2)
      this.state.item.map(event =>{
        const newCost = event.cena*4.382
        event.cena = newCost.toFixed(2)
     })
    }else if (this.state.valute=="PLN" && actualyValute == 'USD'){
      const cost = document.querySelector('#cost').value*0.249
      document.querySelector('#cost').value =  cost.toFixed(2)
      this.state.item.map(event =>{
        const newCost = event.cena*0.249.toFixed(2)
        event.cena = newCost.toFixed(2)
     })
    }else if (this.state.valute=="USD" && actualyValute == 'PLN'){
      const cost = document.querySelector('#cost').value*4.006
      document.querySelector('#cost').value =  cost.toFixed(2)
      this.state.item.map(event =>{
        const newCost = event.cena*4.006
        event.cena = newCost.toFixed(2)
     })
    }else if (this.state.valute=="USD" && actualyValute == 'EUR'){
      const cost = document.querySelector('#cost').value*0.91
      document.querySelector('#cost').value =  cost.toFixed(2)
      this.state.item.map(event =>{
        const newCost = event.cena*0.91
        event.cena = newCost.toFixed(2)
     })
    }else if (this.state.valute=="EUR" && actualyValute == 'USD'){
      const cost = document.querySelector('#cost').value*1.093
      document.querySelector('#cost').value =  cost.toFixed(2)
      this.state.item.map(event =>{
        const newCost = event.cena*1.093
        event.cena = newCost.toFixed(2)
     })
    }
    this.setState({
      valute: actualyValute
    })
  }

   render(){
     return(
    <div>
      <select className="valute-choise" onChange ={this.changeValute.bind(this)}>
        <option>PLN</option>
        <option>EUR</option>
        <option>USD</option>
      </select>

     
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
            <td>{event.cena} {this.state.valute}</td>
            <td>{event.ilosc} szt.</td>
            </tr>
            )
          })}
        
       </table>
      <input type='number' id='cost' placeholder="Cena"/>
      <span>x</span>
      <input type='number' id='quantity' placeholder="1" />
      <button onClick = {this.addItem.bind(this)}>dodaj item</button>
      <button className= 'button-s'onClick={this.money.bind(this)}> Sprawdź</button>
      <br/>
      <div>
      {this.valueOneItem()}
      </div>

      
      <button onClick={this.moneyAll.bind(this)}> Sprawdź wszystkie</button>
      <div id='Value-All-Item'>
        {this.valueAllItem()}
      </div>
      
      
      
    </div>
     )
    
   }

}
export default Calculator;

import React from 'react';
import './style/Calculator.css';


class Calculator extends React.Component {
  constructor(props){
      super(props);
      this.state ={
        soult: 0,
        idItem: 0,
        numb: 1,
        numb2: 0,
        allItemVal: 0,
        steamProv: 0,
        item: [],
        summary: 0,
        actualyLength : 0,
        valute: 'PLN',
        error: ''
      }
  }
  componentDidUpdate(){
    this.valueAllItem.bind(this)
  }


 money = () =>{
    const cost = document.querySelector('#cost').value
    let val = document.querySelector('#quantity').value
    if(cost>0){
      if(val > 0){
        val = parseInt(val)
        this.setState({
          soult: cost*(val)-cost*(val)*15/100,
          steamProv:cost*(val)*15/100,
          numb2: 1,
          allItemVal: 0
        })
      }else{
        this.setState({
          soult: cost*(this.state.numb)-cost*(this.state.numb)*15/100,
          steamProv:cost*(this.state.numb)*15/100,
          numb2: 1,
          allItemVal: 0
  
        })
      }
      this.setState({
        error: ''
      })
    }else{
      this.setState({
        error: 'PODAJ CENE ABY SPRWADZIC ILE OTRZYMASZ !!!'
      })
    }
    
    this.valueOneItem()
   }



   addItem = () =>{
    let cost = document.querySelector('#cost').value
    let val = document.querySelector('#quantity').value
    cost = parseFloat(cost).toFixed(2)
    if(cost > 0){
      if(val>0){
        val = parseInt(val)
        const obj = {id: this.state.idItem,cena:cost,ilosc:val}
        this.state.item.push(obj)
        this.setState({
          item: this.state.item,
          numb2: 0,
          allItemVal: 0,
          idItem: this.state.idItem +1
        })
      }else{
        const obj = {id: this.state.idItem,cena:cost,ilosc:'1'}
        this.state.item.push(obj)
        this.setState({
          item: this.state.item,
          numb2: 0,
          allItemVal: 0,
          idItem: this.state.idItem +1
        })
    }
    this.setState({
      error: ''
    })
    } else{
      this.setState({
        error: 'PODAJ CENE  ITEMU KTÓRY CHCESZ DODAĆ!!!'
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
      numb2: 0,
      allItemVal: 1
    })
    }else{
      return 0;
    }
      
   }
   valueAllItem = ()=>{
     if(this.state.summary > 0 && this.state.allItemVal >0){
       const soultAll = this.state.summary-this.state.summary*15/100
       const steamProvAll =  this.state.summary.toFixed(2)*15/100
      return(
        <>
        <p>value all your item: {this.state.summary.toFixed(2)} {this.state.valute} </p>
        <p>soult all your item: {soultAll.toFixed(2)} {this.state.valute}</p>
        <p>steam provision all your item: {steamProvAll.toFixed(2)} {this.state.valute}</p>
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
        <p>soult: {this.state.soult.toFixed(2)} {this.state.valute}</p>
        <p>steam provision: {this.state.steamProv.toFixed(2)} {this.state.valute}</p>
      </>
     )
   }else{
    return '';
   }
  }

  changeValute = (e) =>{
    const actualyValute = e.currentTarget.value
    if(this.state.valute=="PLN" && actualyValute == 'EUR'){
      const cost = document.querySelector('#cost').value/4.38
      document.querySelector('#cost').value =  cost
      this.state.item.map(event =>{
        const newCost = event.cena/4.38
        event.cena = newCost.toFixed(2)
     })
    }else if (this.state.valute=="EUR" && actualyValute == 'PLN'){
      const cost = document.querySelector('#cost').value*4.38
      document.querySelector('#cost').value =  cost
      this.state.item.map(event =>{
        const newCost = event.cena*4.38
        event.cena = newCost.toFixed(2)
     })
    }else if (this.state.valute=="PLN" && actualyValute == 'USD'){
      const cost = document.querySelector('#cost').value/4.006
      document.querySelector('#cost').value =  cost
      this.state.item.map(event =>{
        const newCost = event.cena*0.249
        event.cena = newCost.toFixed(2)
     })
    }else if (this.state.valute=="USD" && actualyValute == 'PLN'){
      const cost = document.querySelector('#cost').value*4.006
      document.querySelector('#cost').value =  cost
      this.state.item.map(event =>{
        const newCost = event.cena*4.006
        event.cena = newCost.toFixed(2)
     })
    }else if (this.state.valute=="USD" && actualyValute == 'EUR'){
      const cost = document.querySelector('#cost').value/1.093
      document.querySelector('#cost').value =  cost
      this.state.item.map(event =>{
        const newCost = event.cena/1.093
        event.cena = newCost.toFixed(2)
     })
    }else if (this.state.valute=="EUR" && actualyValute == 'USD'){
      const cost = document.querySelector('#cost').value*1.093
      document.querySelector('#cost').value =  cost
      this.state.item.map(event =>{
        const newCost = event.cena*1.093
        event.cena = newCost.toFixed(2)
     })
    }
    this.setState({
      valute: actualyValute,
      allItemVal: 0
    })
    const cost = document.querySelector('#cost').value
    if(cost > 0){
      this.money()
    }
  }
  deleteOneItem = (id) =>{
    this.state.item.splice(id, 1)
    this.setState({
      item: this.state.item
    })
  
  }
   deleteEFromInput  = () =>{
    const cost = document.querySelector('#cost').value
      console.log(cost.indexOf(2))
     if(cost.indexOf(cost.keyCode !== 69) > -1){
      console.log("bye")
     }else{
      console.log("elo")
     }
   }

   deleteEFromInputt = (event) =>{
   let cost =  event.currentTarget.value
   let test = document.querySelector('#cost').value
   console.log(test)
   console.log(cost)
   console.log(cost.length)
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
              <tr id={index + 1}   className={index%2===0?'color1': 'color2'}>
            <td key={index} >{index+1}</td>
            <td>{event.cena} {this.state.valute}</td>
            <td>{event.ilosc} szt.</td>
            <button onClick={this.deleteOneItem.bind(this,index)}>usuń</button>
            </tr>
            )
          })}
        
       </table>
      <input type='number' id='cost' placeholder="Cena" onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}/>
      <span>x</span>
      <input type='number' id='quantity' placeholder="1"   onKeyDown={(evt) => ["e", "E", "+", "-",",","."].includes(evt.key) && evt.preventDefault()}/>
      <button onClick = {this.addItem.bind(this)}>dodaj item</button>
      <button className= 'button-s'onClick={this.money.bind(this)}> Sprawdź</button>
      <br/>
      <h1 className= "errorCost">{this.state.error}</h1>
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

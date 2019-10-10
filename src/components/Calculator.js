import React from 'react';
import './style/Calculator.css';
import Valute from './Valute.js'
import { move } from './Service'

class Calculator extends React.Component {
  constructor(props){
      super(props);
      this.state ={
        soult: 0,
        idItem: 0,
        numb: 1,
        ShowValueItem: 0,
        steamProv: 0,
        item: [],
        summary: 0,
        actualyLength : 0,
        valute: 'USD',
        error: ''
      }
  }
  componentDidUpdate(){
    this.valueAllItem.bind(this)
  }


 money = () =>{
   this.setState({
    ShowValueItem: 0
   })
    const cost = document.querySelector('#cost').value
    let val = document.querySelector('#quantity').value
    if(cost>0){
      if(val > 0){
        val = parseInt(val)
        this.setState({
          soult: cost*(val)-cost*(val)*15/100,
          steamProv:cost*(val)*15/100,
          ShowValueItem: 1
        })
      }else{
        this.setState({
          soult: cost*(this.state.numb)-cost*(this.state.numb)*15/100,
          steamProv:cost*(this.state.numb)*15/100,
          ShowValueItem: 1
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
    let name = document.querySelector('#skinName').value
    cost = parseFloat(cost).toFixed(2)
    if(cost > 0 && name !== ''){
      if(val>0){
        val = parseInt(val)
        const obj = {id: this.state.idItem,nazwa: name,cena:cost,ilosc:val}
        this.state.item.push(obj)
        this.setState({
          item: this.state.item,
          ShowValueItem: 0,
          idItem: this.state.idItem +1
        })
        document.querySelector('#cost').value = ''
        document.querySelector('#quantity').value = '' 
        document.querySelector('#skinName').value = '' 
      }else{
        const obj = {id: this.state.idItem,nazwa: name,cena:cost,ilosc:'1'}
        this.state.item.push(obj)
        this.setState({
          item: this.state.item,
          ShowValueItem: 0,
          idItem: this.state.idItem +1
        })
        document.querySelector('#cost').value = ''
        document.querySelector('#quantity').value = '' 
        document.querySelector('#skinName').value = '' 
    }
    this.setState({
      error: ''
    })
    } else{
      if(name !== ''){
        this.setState({
          error: 'PODAJ CENE  ITEMU KTÓRY CHCESZ DODAĆ!!!'
        })
      }else{
        this.setState({
          error: 'PODAJ NAZWE SKINA !!!'
        })
      }
    }
    this.moneyAll()
  }

  moneyAll = () =>{
      let sum = 0
      this.state.item.map(event =>{
        const sumOneItem = event.cena*event.ilosc
        sum = sum + sumOneItem;
        return 0;
     })
     this.setState({
      summary:  sum 
    })
   }
   valueAllItem = ()=>{
     if(this.state.item.length>0){
      const soultAll = this.state.summary-this.state.summary*15/100
      const steamProvAll =  this.state.summary.toFixed(2)*15/100
      
     return(
       <>
       <p className="Calculator-Resoult">Resoult:</p>
       <p>value all your item: {this.state.summary.toFixed(2)} {this.state.valute} </p>
       <p>soult all your item: {soultAll.toFixed(2)} {this.state.valute}</p>
       <p>steam provision all your item: {steamProvAll.toFixed(2)} {this.state.valute}</p>
       </>
      )
     }else{
       return ;
     }
       
     
   }

   valueOneItem = () =>{
     if(this.state.ShowValueItem>0){
     return (
      <>
        <span className="Calculator-Resoult">Resoult:</span>
        <p>soult: {this.state.soult.toFixed(2)} {this.state.valute}</p>
        <p>steam provision: {this.state.steamProv.toFixed(2)} {this.state.valute}</p>
      </>
     )
   }else{
    return (
      <>
        <span className="Calculator-Resoult">Resoult:</span>
        <p>soult: 0.00 {this.state.valute}</p>
        <p>steam provision: 0.00 {this.state.valute}</p>
      </>
    )
   }
  }

  changeValute = (PLN_EUR,PLN_USD,EUR_USD,e) =>{
    const actualyValute = e.currentTarget.value
    if(this.state.valute==="PLN" && actualyValute === 'EUR'){
      const cost = document.querySelector('#cost').value/PLN_EUR
      if(cost >0 || this.state.item.length > 0 ){
      document.querySelector('#cost').value =  cost
      this.state.item.map(event =>{
        const newCost = event.cena/4.38
        event.cena = newCost.toFixed(2)
        return 0;
     })

    }
    }else if (this.state.valute==="EUR" && actualyValute === 'PLN'){
      const cost = document.querySelector('#cost').value*PLN_EUR
      if(cost >0 || this.state.item.length > 0 ){
        document.querySelector('#cost').value =  cost
        this.state.item.map(event =>{
          const newCost = event.cena*4.38
          event.cena = newCost.toFixed(2)
          return 0;
       })
      }
    }else if (this.state.valute==="PLN" && actualyValute === 'USD'){
      const cost = document.querySelector('#cost').value/PLN_USD
      if(cost >0 || this.state.item.length > 0 ){
      document.querySelector('#cost').value =  cost
      this.state.item.map(event =>{
        const newCost = event.cena*0.249
        event.cena = newCost.toFixed(2)
        return 0;
     })
    }
    }else if (this.state.valute==="USD" && actualyValute === 'PLN'){
      const cost = document.querySelector('#cost').value*PLN_USD
      if(cost >0 || this.state.item.length > 0 ){
      document.querySelector('#cost').value =  cost
      this.state.item.map(event =>{
        const newCost = event.cena*4.006
        event.cena = newCost.toFixed(2)
        return 0;
     })
    }
    }else if (this.state.valute==="USD" && actualyValute === 'EUR'){
      const cost = document.querySelector('#cost').value/EUR_USD
      if(cost >0 || this.state.item.length > 0 ){
      document.querySelector('#cost').value =  cost
      this.state.item.map(event =>{
        const newCost = event.cena/1.093
        event.cena = newCost.toFixed(2)
        return 0;
     })
    }
    }else if (this.state.valute==="EUR" && actualyValute === 'USD'){
      const cost = document.querySelector('#cost').value*EUR_USD
      if(cost >0 || this.state.item.length > 0 ){
      document.querySelector('#cost').value =  cost
      this.state.item.map(event =>{
        const newCost = event.cena*1.093
        event.cena = newCost.toFixed(2)
        return 0;
     })
    }
    }
    this.setState({
      valute: actualyValute,
      ShowValueItem: 0 
    })
    const cost = document.querySelector('#cost').value
    if(cost > 0 && this.state.soult >0){
      this.money()
    }

    if(cost===0){
      document.querySelector('#cost').value = ''
    }
    if(this.state.item.length>0){
      this.moneyAll()  
    }
    return;
  }


  deleteOneItem = (id) =>{
    this.state.item.splice(id, 1)
    this.setState({
      item: this.state.item,
    })
    this.moneyAll()
  }

  deleteAllItem = () =>{
    this.setState({
      summary: 0,
      item: []
   })
   this.valueAllItem()  
  }
 
   ChangeValuteInTable = (cost,e) =>{
     console.log(cost)
    
    if(this.state.valute === "EUR"){
      return(
        2*4,2
        )
    }else{
      return(
        22*4,2
      )
    }
   }

   lookingForInput = (e) =>{
    const value = e.currentTarget.value 
    if(value === ''){
      this.setState({
        ShowValueItem:0
      })
    }else{
      this.money()
    }
   }





   render(){
     return(
    <div className= "Calculator" >
      <button className="Calculator-Back" onClick={()=>move()}>BACK</button>
      
      <div className="Calculator-Form-Box">
      
      <Valute changeValute={this.changeValute.bind(this)} fromValute="Calculator-Valute" />
          <div className="Calculator-Title-Box">
          <h2>CALCULATOR</h2>
          </div>


          <div className="Calculator-Form">
            <span  className="Calculator-Form-Span">SKIN NAME</span>
            <input type='text'  id='skinName' className="Calculator-Form-inputSkinName" maxLength="30" placeholder="Skin name ..."  />
            <span  className="Calculator-Form-Span">COST</span>
            <input type='number'  id='cost' onChange={this.lookingForInput.bind(this)} className="Calculator-Form-inputCost" min='0' placeholder="cost ..." onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}/>
            <span  className="Calculator-Form-Span">QUANTITY</span>
            <input type='number' id='quantity' onChange={this.money.bind(this)} className="Calculator-Form-inputQuantity" placeholder="1" min='1' onKeyDown={(evt) => ["e", "E", "+", "-",",","."].includes(evt.key) && evt.preventDefault()}/>
            <span className= "errorCost">{this.state.error}</span>   
            <button className="Calculator-Form-Button " onClick = {this.addItem.bind(this)}>ADD ITEM</button><br/>
        </div>
      
        <div className="Calculator-ValueOneItem">
          {this.valueOneItem()}
        </div>
      </div>
      <div className="Calculator-Body">
        <div className= 'Calculator-Table-Items' >
          <table className='Calculator-Table-Form' border="1">
            <tbody>
            <tr>
              <th className="Table-Form-Title-Index" >l.p.</th>
              <th className="Table-Form-Title-NameSkin" >SKIN NAME</th>
              <th className="Table-Form-Title-Cost" >COST</th>
              <th className="Table-Form-Title-Quantity">QUANTITY</th>
              <th className="Table-Form-Title-Sumary">SUMARRY VALUE</th>
              <th className="Table-Form-Title-Delete"> </th>
            </tr>

              {this.state.item.map((event,index) => {
                return(
                  <tr id={index + 1}   className={index%2===0?'color1': 'color2'}>
                <td key={index} className="Table-Index" >{index+1}</td>
                <td className="Table-SkinName">{event.nazwa}</td>
                <td className="Table-Cost">{event.cena} {this.state.valute}</td>
                <td className="Table-Quantity">{event.ilosc} szt.</td>
                <td className="Table-Sumary">{(event.cena*event.ilosc).toFixed(2)} {this.state.valute}</td>
                <td className="Table-ButtonDelete"><button onClick={this.deleteOneItem.bind(this,index)}>DELETE</button></td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        
        <div className="Calculator-Button-Box">
        <div  onClick={this.deleteAllItem.bind(this)} className="svg-wrapper Calculator-deleteAll">
        <svg height="40" width="150">
          <text x="37" y="25" fontFamily="sans-serif" fontSize="15px"  fill="white">DELETE ALL</text>
          <rect id="shape" height="40" width="150" />  
          </svg>
        </div>    
        </div>
              <div className="Calculator-Quantity">
                {this.valueAllItem()}
              </div>
              <div className="Calculator-LogoCS">
              <img className="Calculator-LogoCS-IMG" src="/image/layout/logo.png" alt="SORRY THIS IMG IS CRASHED"/>
              </div>
      </div>
    </div>
     )
    
   }

}
export default Calculator;

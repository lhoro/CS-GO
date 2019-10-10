import React from 'react';

const Valute = (props) =>{

 const changeValute = (e) =>{
    const actualyValute = e.currentTarget.value
    if(props.valute==="PLN" && actualyValute === 'EUR'){
      const cost = document.querySelector('#cost').value/4.38
      if(cost >0 || props.item.length > 0 ){
      document.querySelector('#cost').value =  cost
      props.item.map(event =>{
        const newCost = event.cena/4.38
        event.cena = newCost.toFixed(2)
        return 0;
     })

    }
    }else if (props.valute==="EUR" && actualyValute === 'PLN'){
      const cost = document.querySelector('#cost').value*4.38
      if(cost >0 || props.item.length > 0 ){
        document.querySelector('#cost').value =  cost
        props.item.map(event =>{
          const newCost = event.cena*4.38
          event.cena = newCost.toFixed(2)
          return 0;
       })
      }
    }else if (props.valute==="PLN" && actualyValute === 'USD'){
      const cost = document.querySelector('#cost').value/4.006
      if(cost >0 || props.item.length > 0 ){
      document.querySelector('#cost').value =  cost
      props.item.map(event =>{
        const newCost = event.cena*0.249
        event.cena = newCost.toFixed(2)
        return 0;
     })
    }
    }else if (props.valute==="USD" && actualyValute === 'PLN'){
      const cost = document.querySelector('#cost').value*4.006
      if(cost >0 || props.item.length > 0 ){
      document.querySelector('#cost').value =  cost
      props.item.map(event =>{
        const newCost = event.cena*4.006
        event.cena = newCost.toFixed(2)
        return 0;
     })
    }
    }else if (props.valute==="USD" && actualyValute === 'EUR'){
      const cost = document.querySelector('#cost').value/1.093
      if(cost >0 || props.item.length > 0 ){
      document.querySelector('#cost').value =  cost
      props.item.map(event =>{
        const newCost = event.cena/1.093
        event.cena = newCost.toFixed(2)
        return 0;
     })
    }
    }else if (props.valute==="EUR" && actualyValute === 'USD'){
      const cost = document.querySelector('#cost').value*1.093
      if(cost >0 || props.item.length > 0 ){
      document.querySelector('#cost').value =  cost
      props.item.map(event =>{
        const newCost = event.cena*1.093
        event.cena = newCost.toFixed(2)
        return 0;
     })
    }
    }
    props.actualyValute(actualyValute)
    const cost = document.querySelector('#cost').value
    if(cost > 0){
      props.money()
    }

    if(cost===0){
      document.querySelector('#cost').value = ''
    }
    if(props.item.length>0){
      props.moneyAll()  
    }
   
    return;
  }

  return(
    <select className="Calculator-Valute-Choise" onChange ={changeValute.bind(this)}>
      <option>PLN</option>
      <option>EUR</option>
      <option>USD</option>
    </select>
  )

}
export default Valute
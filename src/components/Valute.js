import React from 'react';

const Valute = (props) =>{
  const PLN_EUR = 4.32;
  const PLN_USD = 3.92;
  const EUR_USD = 1.10;

  return(
    <select id={props.fromValute} className="Valute-Choise" onChange ={props.changeValute.bind(this,PLN_EUR,PLN_USD,EUR_USD)}>
      <option>PLN</option>
      <option>EUR</option>
      <option defaultValue>USD</option>
    </select>
  )

}
export default Valute
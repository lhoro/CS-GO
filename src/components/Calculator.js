import React from 'react';
import './style/Calculator.css';

import { move } from './Service';

function App() {
  return (
    <div className="Calculator">
      <button className="Calculator-Back" onClick={()=>move()}>BACK</button>
      calc
    </div>
  );
}

export default App;

import React from 'react';
import './style/Menu.css';

import { play } from './Service'

// import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div className="Menu">
      <div className="Menu-List">
        {/* <Link to="/" onClick={()=>play("switch")} >Homepage</Link> <br/>
        <Link to="/weapons" onClick={()=>play("switch")}>Weapons</Link> <br/>
        <Link to="/skins" onClick={()=>play("switch")}>Skins</Link> <br/>
        <Link to="/calc" onClick={()=>play("switch")}>Calculator</Link> <br/> */}
      </div>
    </div>
  );
}

export default Menu;

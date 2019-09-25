import React from 'react';
import './style/Menu.css';

import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div className="Menu">
      <div className="Menu-List">
        <Link to="/" >Homepage</Link> <br/>
        <Link to="/weapons" >Weapons</Link> <br/>
        <Link to="/skins" >Skins</Link> <br/>
        <Link to="/calc" >Calculator</Link> <br/>
      </div>
    </div>
  );
}

export default Menu;

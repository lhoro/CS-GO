import React from 'react';
import './style/Ranks.css';

import { move } from './Service';

function Ranks() {
  return (
    <div className="Ranks">
      <h1 className="Ranks-Box-Title">RANKS IN CS GO </h1>
      <div className="Ranks-AllTable-Box">
        <div className="Ranks-Table-Box MM-Table-Box">
          <p className="Ranks-Table-Title MM-Title">MATCH MAKING</p>
          <table className="Ranks-Table MM-Table " >
            <tbody>
              <tr>
                <th>RANK IMG</th>
                <th>RANK NAME</th>
                <th>RANK FUNNY DESCRIPTION</th>
              </tr>
              <tr>
                <td>OBRAZEK</td>
                <td> NAZWA RANGI</td>
                <td> NOOB PLAYER</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="Ranks-Table-Box Wingman-Table-Box">
        <p className="Ranks-Table-Title Wingman-Title">WINGMAN</p>
          <table className="Ranks-Table Wingman-Table ">
            <tbody>
              <tr>
                <th>RANK IMG</th>
                <th>RANK NAME</th>
                <th>RANK FUNNY DESCRIPTION</th>
              </tr>
              <tr>
                <td>OBRAZEK</td>
                <td> NAZWA RANGI</td>
                <td> NOOB PLAYER</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="Ranks-Table-Box DZ-Table-Box">
          <p className="Ranks-Table-Title DZ-Title">DANGER ZONE</p>
          <table className="Ranks-Table DZ-Table ">
            <tbody>
              <tr>
                <th>RANK IMG</th>
                <th>RANK NAME</th>
                <th>RANK FUNNY DESCRIPTION</th>
              </tr>
              <tr>
                <td>OBRAZEK</td>
                <td> NAZWA RANGI</td>
                <td> NOOB PLAYER</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button className="Ranks-Back" onClick={()=>move()}>BACK</button>
    </div>
  );
}

export default Ranks;

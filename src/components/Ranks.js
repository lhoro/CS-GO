import React from 'react';
import './style/Ranks.css';
import ranks_MM from "../data/ranks_MM.json";
import ranks_Wingman from "../data/ranks_Wingman.json";
import ranks_DZ from "../data/ranks_DZ.json";
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
              
                {ranks_MM.map(event=>{
                  return(
                    <tr>
                      <td><img className="img-MM-rank" src={event.rank_img}/></td>
                      <td> {event.rank_name}</td>
                      <td> {event.rank_funny_descript}</td>
                    </tr>
                  )
                })} 
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
              {ranks_Wingman.map(event=>{
                  return(
                    <tr>
                      <td><img src={event.rank_img}/></td>
                      <td> {event.rank_name}</td>
                      <td> {event.rank_funny_descript}</td>
                    </tr>
                  )
                })}   
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
              {ranks_DZ.map(event=>{
                  return(
                    <tr>
                      <td><img className="img-MM-rank" src={event.rank_img}/></td>
                      <td> {event.rank_name}</td>
                      <td> {event.rank_funny_descript}</td>
                    </tr>
                  )
                })} 
            </tbody>
          </table>
        </div>
      </div>
     
      <button className="Ranks-Back" onClick={()=>move()}>BACK</button>
    </div>
  );
}

export default Ranks;

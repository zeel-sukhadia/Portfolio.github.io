import "./Card_style.css";


import React from 'react'

import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <div className="pro-card">
    <img src={props.imgsrc} alt="image" style={{height:'300px'}}></img>
    <h2 className="title" style={{fontSize:'30px'}}>{props.title} </h2>
    <div className="details" style={{fontSize:'20px' ,wordSpacing:'-3px'}}><p>{props.text}</p><br></br>
    <div className="buttons">
      <NavLink to={props.view} className="btn" style={{fontSize:'20px'}}>View</NavLink>&nbsp;
      <NavLink to="url.com" className="btn" style={{fontSize:'20px'}}>Source</NavLink>
    </div>
    </div>
    </div>
  )
}

export default Card
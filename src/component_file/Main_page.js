
import "./Main_style.css";

import React from 'react'
import intro_img from '../my_image/intro_img.jpg'
import { Link } from "react-router-dom";

function Main_page() {
  return (
    <div className="mask">
        <img className="intro_img" src={intro_img} alt="image"></img>
        
        <div className="content">
            <p>HELLO, I'M zeel sukhadia</p>
            <h1>Fronted Web Developer</h1>
            <Link to="/Project" className="btn">Projects</Link>

            <Link to="/Contact" className="btn-light">Contect</Link>
        </div>
    </div>
    
  )
}

export default Main_page

// style={{color:'white',fontSize:'30px'}}
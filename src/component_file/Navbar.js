import "./Navbar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {

    const[click,setclick] = useState(false);
    
    const handleclick = ()=>{
        setclick(!click);
    }

const [nav,setnav] = useState(false)
const changebg = ()=>{
    if(window.scrollY >=1){
        setnav(true);
    }
    else{
        setnav(false);
    }
};

window.addEventListener("scroll",changebg)

  return (
  <div className={nav? "header header-bg":"header"}> 
    
     <Link to="/">
        <h1 className="navbar">Portfolio</h1>
        </Link>
        <ul className = {click?("nav-menu active"):("nav-menu")}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Project">Project</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleclick}>
            {click ?(<FaTimes size={40} color="white" />):(<FaBars size={40} color="white" />)}
            {/* <FaBars size={40} color="white" />
            <FaTimes size={40} color="white" /> */}
        </div>
    </div>
  
  )
}

export default Navbar
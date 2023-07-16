// import './Work_style.css'
import "./Card_style.css";

import Card from '../component_file/Card'
import Work_card from '../component_file/Work_card'


import React from 'react'


function Work() {
  return (
    <div className="card-container">
        <h1 className="pro-heading" style={{color:'coral'}}>Projects</h1>
        <div className="pro-container">
           {Work_card.map((val,index) =>{
            return(<Card
            key={index} 
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            />
           )
           })}


       
        </div>
    </div>
  )
}

export default Work
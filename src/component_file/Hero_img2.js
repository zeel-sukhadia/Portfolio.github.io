import './Hero_img2.css'

import React, { Component } from 'react'
// import image2 from '../my_image/coding3.jpg'

class Hero_img2 extends Component{
  render(){
    return (
    <div className='hero_img'>
        <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
    </div> 
    )
    }
  }
   
   
  

export default Hero_img2



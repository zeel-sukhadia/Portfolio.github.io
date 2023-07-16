import { Link } from 'react-router-dom';
import './About_cont_style.css';
import fronted2 from '../my_image/fronted2.jpg'
import React_JS3 from '../my_image/React_JS3.jpg'

import React from 'react'

function About_content() {
  return (
    <div className='about_2'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>Hello, This is Zeel Sukhadia! I am a Front-End Developer. I am a dedicated and passionate frontend developer with a strong desire to create exceptional user experiences.
                 With a background in web development and a keen eye for design, 
                I specialize in transforming ideas into visually stunning and highly functional websites and applications.</p>
                <Link to="/Contact">
                    <button className='btn' style={{fontSize:'20px'}}>Contact Me</button>
                </Link>
        </div>
            
            
            <div className='right'>
                <div className='img-container'>
                    <div className='img-top'>
                        <img src={fronted2} className='img' alt='true'></img>
                    </div>
                    <div className='img-bottom'>
                        <img src={React_JS3} className='img' alt='true'></img>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default About_content
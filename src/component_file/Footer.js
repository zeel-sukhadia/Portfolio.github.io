import './Footer_style.css';

import React from 'react'
import {FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                <p><FaHome size={20} style={{color:'white'}}/>
                &nbsp;105, RamdevNagar Society DarbarChokdi.
                <br></br>Vadodara</p>
                </div>
                
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'white'}}/>
                    &nbsp; +91&nbsp;&nbsp;7990102846</h4>
                
                </div>
                <div className='email'>
                <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>
                    <h4><FaMailBulk size={20} style={{color:'white'}}/>
                    &nbsp;&nbsp;zeelsukhadia@gmail.com</h4>
                </a>
                </div>
            </div>
        
            
            <div className='right'>
                <h2 className='about_me'>About Me</h2>
                    <p className='about'>My name is Zeel Sukhadia, and 
                    I'm a BCA student at the Maharaja Sayajirao University of Baroda right now.</p>
                    <div className='social'>
                    <div className='instagram'>
                    <a href='https://www.instagram.com/'><FaInstagram size={30} style={{color:'white'}}/></a>&nbsp;&nbsp;&nbsp;
                    <a href='https://www.linkedin.com/feed/'><FaLinkedin size={30} style={{color:'white'}}/></a>&nbsp;&nbsp;&nbsp;
                    <a href='https://github.com/'><FaGithub size={30} style={{color:'white'}}/></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
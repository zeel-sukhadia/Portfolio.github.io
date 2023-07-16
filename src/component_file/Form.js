import { FaBeer, FaChartArea, FaHeart, FaWhatsapp } from 'react-icons/fa'
import './Form_style.css'
import React from 'react'


function Form() {
  return (
    <div className='form'>
        <h1>Let's Get Connected  <FaHeart size={40} style={{color:'white'}}/></h1>
        <form>
            <label>Your Name</label>
            <input type='text'></input>

            <label>Your E-mail</label>
            <input type='email'></input>

            <label>Subject</label>
            <input type='text'></input>

            <label>Message</label>
            <textarea rows={6} placeholder='Type your message here'></textarea>

            <button className='btn' style={{fontSize:'20px'}}> Submit</button>
        </form>
    </div>
  )
}

export default Form
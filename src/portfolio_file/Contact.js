import React from 'react'
import Navbar from '../component_file/Navbar'
import Footer from '../component_file/Footer'
import Hero_img2 from '../component_file/Hero_img2'
import Form from '../component_file/Form'

function Contact() {
  return (
    <div><Navbar/>
    <Hero_img2 heading="CONTACT" text="Let's Chat"/>
    <Form/>
    <Footer/></div>
  )
}

export default Contact
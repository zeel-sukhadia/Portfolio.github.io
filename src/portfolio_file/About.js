import React from 'react'
import Navbar from '../component_file/Navbar'
import Footer from '../component_file/Footer'
import Hero_img2 from '../component_file/Hero_img2'
import About_content from '../component_file/About_content'

function About() {
  return (
    <div><Navbar/>
    <Hero_img2 heading="ABOUT" text="I'm a Front-End Developer"/>
    <About_content />
    <Footer/></div>
  )
}

export default About
import React from 'react'
import Navbar from '../component_file/Navbar'
import Footer from '../component_file/Footer'
import Hero_img2 from '../component_file/Hero_img2'

import Work from '../component_file/Work'

function Project() {
  return (
    <div>
    <Navbar/>
    <Hero_img2 heading="PROJECTS" text="Some of my recent work"/> 
    <Work/>
    <Footer/>
    
    </div>
  )
}

export default Project
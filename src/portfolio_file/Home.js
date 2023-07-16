import React from 'react'
import Navbar from '../component_file/Navbar'

import Main_page from '../component_file/Main_page'

import Footer from '../component_file/Footer'
import Work from '../component_file/Work'
import About_content from '../component_file/About_content'
import Form from '../component_file/Form'

function Home() {
  return (
    <div>
      <Navbar/>

      <Main_page/>
      <Work/>
      <About_content/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home
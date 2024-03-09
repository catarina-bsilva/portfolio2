import React from 'react'

import About from "./About"
import Contacts from "./Contacts"
import Projects from "./Projects"

import './Main.sass'

const Main = () => {
  return (
    <div id="containerMain" className='dark'>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default Main
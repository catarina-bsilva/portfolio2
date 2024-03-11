import React from 'react'

import About from "./About"
import Contacts from "./Contacts"
import Projects from "./Projects"
import ProjectsFinal from "./ProjectsFinal"
import ProjectCard from './projects/ProjectCard'
import Projectos from '../assets/BaseDados.json'

import './Main.sass'

const Main = () => {
  return (
    <div id="containerMain" className='dark'>
      <About/>
      <div id="firstProject" className="cardProject" >
        <Projects/>
        <ProjectCard nome={Projectos[0].name} link={Projectos[0].Link}/>
      </div>
      <div id="secondProject" className="cardProject" >
        <ProjectCard nome={Projectos[1].name} link={Projectos[1].Link}/>
      </div>
      <div id="thirdProject" className="cardProject" >
        <ProjectCard nome={Projectos[2].name} link={Projectos[2].Link}/>
      </div>
      <div id="lastProject" className="cardProject" >
        <ProjectCard nome={Projectos[3].name} link={Projectos[3].Link}/>
        <ProjectsFinal/>
      </div>
      <Contacts/>
    </div>
  )
}

export default Main
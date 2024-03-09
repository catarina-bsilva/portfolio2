import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../context'

import ProjectCard from './projects/ProjectCard'
import  Projectos from '../assets/BaseDados.json'

import './projects.sass'

const Projects = () => {
  const {language} = useContext(LanguageContext)

  return (
    <div id='projects' className='dark'>
      {/* titulo pagina*/}
      <h1 className='tituloPagina' id='projecstInicio'>
        &lt;{language === "english" ? "projects" : language === "portuguese" ? "projectos" : language === "german" ? "projekte" : ""}&gt;
      </h1>

      {/* projectos */}
      <ProjectCard id="firstProject" className="cardProject" nome={Projectos[0].name} link={Projectos[0].Link}/>
      <ProjectCard className="cardProject" nome={Projectos[1].name} link={Projectos[1].Link}/>
      <ProjectCard className="cardProject" nome={Projectos[2].name} link={Projectos[2].Link}/>
      <div id="lastProject"><ProjectCard className="cardProject" nome={Projectos[3].name} link={Projectos[3].Link}/></div>

      {/* botão Ver Todos*/}
      <button className='BtnVerTodos dark'>
        <Link to="/ProjectGeral">
          {language === "english" ? "	View all projects" : language === "portuguese" ? "Ver todos os projectos" : language === "german" ? "Alle Projekte ansehen" : ""}
        </Link>
      </button>

      {/* rodapé página*/}
      <h1 className='tituloPagina' id='projectsFinal'>
        &lt;/{language === "english" ? "projects" : language === "portuguese" ? "projectos" : language === "german" ? "projekte" : ""}&gt;
      </h1>
    </div>
  )
}

export default Projects
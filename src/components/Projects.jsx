
import { useContext } from 'react'
import { LanguageContext } from '../context'


import './projects.sass'

const Projects = () => {
  const {language} = useContext(LanguageContext)

  return (
    <div id='projects' className='dark'>
      {/* titulo pagina*/}
      <h1 className='tituloPagina' id='projecstInicio'>
        &lt;{language === "english" ? "projects" : language === "portuguese" ? "projectos" : language === "german" ? "projekte" : ""}&gt;
      </h1>
    </div>
  )
}

export default Projects
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../context'

import './projectsfinal.sass'
const ProjectsFinal = () => {
  const {language} = useContext(LanguageContext)

  return (
    <div id='projectsfinalcontainer'>
        {/* botão Ver Todos*/}
      <button className='BtnVerTodos dark' id='Vertodos'>
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

export default ProjectsFinal
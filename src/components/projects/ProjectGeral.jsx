import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext, LanguageContext } from '../../context'

import { IoArrowBackCircleOutline } from "react-icons/io5"

import MiniProjectCard from './MiniProjectCard'
import  Projectos from '../../assets/BaseDados.json'

import './ProjectGeral.sass'

const ProjectGeral = () => {
  //Theme and Language Context
  const {theme} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext)

  return (
    <div>
      <div id='containerProjectGeral' className='dark'>
        {/* Mapa de Projectos */}
        {Projectos.map((projeto) =>
          <MiniProjectCard nome={projeto.name} link={projeto.Link} foto={projeto.FotoPrincipal} key={projeto.id} id={projeto.id} className="MiniProjectCard"/>
        )}

        {/* Botão Back */}
        <Link to="/"><IoArrowBackCircleOutline id='back' /></Link>
      </div>
    </div>
  )
}

export default ProjectGeral
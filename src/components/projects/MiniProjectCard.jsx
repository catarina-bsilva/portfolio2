import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext, LanguageContext } from '../../context'

import Projecto1Principal from '../../assets/projectos/Projecto1Principal.png'
import Projecto2Principal from '../../assets/projectos/Projecto2Principal.png'
import Projecto3Principal from '../../assets/projectos/Projecto3Principal.png'
import Projecto4Principal from '../../assets/projectos/Projecto4Principal.png'
import Projecto5Principal from '../../assets/projectos/Projecto5Principal.png'
import Projecto6Principal from '../../assets/projectos/Projecto6Principal.png'
import Projecto7Principal from '../../assets/projectos/Projecto7Principal.png'
import Projecto8Principal from '../../assets/projectos/Projecto8Principal.png'

import './MiniProjectCard.sass'

const MiniProjectCard = ({nome, link, foto, key, id}) => {
  //Theme toggle
  const { theme, toggleTheme } = useContext(ThemeContext)
  const isChecked = theme === "dark"

  //Language toggle
  const {language, toggleLanguageEN, toggleLanguagePT, toggleLanguageDE} = useContext(LanguageContext)

  //Receber imagens de cada Projecto
  const getImagePath = (imageName) => {
    switch(imageName) {
      case 'Projecto1Principal.png':
        return Projecto1Principal
        break
      case 'Projecto2Principal.png':
        return Projecto2Principal
        break
      case 'Projecto3Principal.png':
        return Projecto3Principal
        break
      case 'Projecto4Principal.png':
        return Projecto4Principal
        break
      case 'Projecto5Principal.png':
        return Projecto5Principal
        break
      case 'Projecto6Principal.png':
        return Projecto6Principal
        break
      case 'Projecto7Principal.png':
        return Projecto7Principal
        break
      case 'Projecto8Principal.png':
        return Projecto8Principal
        break
      default:
        return undefined
    }
  }

  return (
    <div id='containerMini' className='dark'>
      {/* Titulo Projecto */}
      <h2 className='tituloMini dark'>{nome}</h2>

      {/* Botºao Abrir Projecto */}
      <button className='BtnMini dark'>
        <Link to={`/ProjectCard?id=${id}&nome=${nome}&link=${link}&foto=${foto}&fromMiniCard=true`}>
          {language === "english" ? "Open Project" : language === "portuguese" ? "Abrir Projecto" : language === "german" ? "Projekt öffnen" : ""} 
        </Link>
      </button>

      {/* Frame */}
      <div id="frameMini">
        <img src={getImagePath(foto)} alt="foto projecto" id='fotoMini' />
      </div>
    </div>
  )
}

export default MiniProjectCard


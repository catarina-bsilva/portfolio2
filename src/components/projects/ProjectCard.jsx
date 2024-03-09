import React from 'react'
import { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'

import { BsInstagram, BsLinkedin, BsGithub, BsDownload, BsGit, BsBootstrap } from 'react-icons/bs'
import { FaSass, FaHtml5, FaCss3Alt, FaVuejs, FaReact } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { IoArrowBackCircleOutline } from "react-icons/io5"

import { LanguageContext } from '../../context'

import './projectCard.sass'

const ProjectCard = ({nome, link, foto, key, id}) => {
  //Language Context
  const {language} = useContext(LanguageContext)

  //Elementos a receber quando o ProjectCard é aberto atravez do MiniProjectCard
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idParam = searchParams.get('id');
  const nomeParam = searchParams.get('nome');
  const linkParam = searchParams.get('link');
  const fotoParam = searchParams.get('foto');
  const fromMiniCard = searchParams.get('fromMiniCard')

  return (
    <div className={`dark projectCard ${fromMiniCard ? 'individual' : ''}`}>
      <div id="conteudo">
        {/* Titulo do Projecto */}
        <h2 className='titulo'>{nome || nomeParam}</h2>

        {/* Descrição do Projecto */}
        <p id='descricaoProjecto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus temporibus totam, tempora nemo accusamus asperiores eos animi, alias sed voluptas fuga voluptate autem inventore in ullam dolores, minima consequatur!</p>

        {/* Tecnologias usadas */}
        <h3 className='titulo'>
          {language === "english" ? "Technologies used" : language === "portuguese" ? "Tecnologias usadas" : language === "german" ? "Verwendete Technologien" : ""}
        </h3>
        <ul id='tecUsada'>
          <li id='React'><FaReact/></li>
          <li id='Sass'><FaSass/></li>
        </ul>

        {/* Visitar Website */}
        <button className='Btn dark' id='BtnVisit'>
          <a href={link || linkParam} target='_blank'>
            {language === "english" ? "Visit website" : language === "portuguese" ? "Visitar website" : language === "german" ? "Website besuchen" : ""}
          </a>
        </button>
      </div>

      {/* Frame */}
      <div id='frames'>
        <iframe src={link || linkParam} frameBorder="0" scroll='auto'></iframe>
      </div>

      {/* Botão Back */}
      {fromMiniCard && (
        <Link to="/ProjectGeral"><IoArrowBackCircleOutline id='back' /></Link>
      )}
    </div>
  )
}

export default ProjectCard
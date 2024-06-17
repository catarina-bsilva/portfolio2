
import { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'

import { BsInstagram, BsLinkedin, BsGithub, BsDownload, BsGit, BsBootstrap } from 'react-icons/bs'
import { FaSass, FaHtml5, FaCss3Alt, FaVuejs, FaReact } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { SiTypescript } from "react-icons/si"

import { LanguageContext } from '../../context'

import './projectCard.sass'

const ProjectCard = ({nome, link, FotoPrincipalPC, FotoPrincipalTABLET, FotoPrincipalTLM, key, id, descricaoEN, descricaoPT, descricaoDE, tecnologias}) => {
  //Language Context
  const {language} = useContext(LanguageContext)

  //Elementos a receber quando o ProjectCard é aberto atravez do MiniProjectCard
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idParam = searchParams.get('id');
  const nomeParam = searchParams.get('nome');
  const linkParam = searchParams.get('link');
  const fotoPCParam = searchParams.get('fotoPC');
  const fotoTABLETParam = searchParams.get('fotoTABLET');
  const fotoTLMParam = searchParams.get('fotoTLM');
  const descricaoENParam = searchParams.get('descricaoEN');
  const descricaoPTParam = searchParams.get('descricaoPT');
  const descricaoDEParam = searchParams.get('descricaoDE');
  const tecnologiasParam = searchParams.get('tecnologias');
  const fromMiniCard = searchParams.get('fromMiniCard')

  const iconMap = {
    Html: <FaHtml5 />,
    Css: <FaCss3Alt />,
    JavaScript: <DiJavascript1 />,
    React: <FaReact />,
    Sass: <FaSass />,
    TypeScript: <SiTypescript/>,
    Vue: <FaVuejs/>
  };



  const renderTecnologias = (tecnologias) => {
    if (!tecnologias) return null;

    return tecnologias.split(', ').map(tec => (
      <li key={tec} id={tec}>
        {iconMap[tec] || tec}
      </li>
    ));
  };


  return (
    <div className={`dark projectCard ${fromMiniCard ? 'individual' : ''}`} id='projectCardContainer'>
      <div id="conteudo">
        {/* Titulo do Projecto */}
        <h2 className='titulo'>{nome || nomeParam}</h2>

        {/* Descrição do Projecto */}
        <p id='descricaoProjecto'>
          {language === "english" ? (descricaoEN || descricaoENParam) : 
          language === "portuguese" ? (descricaoPT || descricaoPTParam) : 
          language === "german" ? (descricaoDE || descricaoDEParam) : ""}

        </p>

        {/* Tecnologias usadas */}
        <h3 className='titulo'>
          {language === "english" ? "Technologies used" : language === "portuguese" ? "Tecnologias usadas" : language === "german" ? "Verwendete Technologien" : ""}
        </h3>
        <ul id='tecUsada'>
          {renderTecnologias(tecnologias || tecnologiasParam)}
        </ul>

        {/* Visitar Website */}
        <button className='Btn dark' id='BtnVisit'>
          <a href={link || linkParam} target='_blank' rel='noreferrer'>
            {language === "english" ? "Visit website" : language === "portuguese" ? "Visitar website" : language === "german" ? "Website besuchen" : ""}
          </a>
        </button>
      </div>

      {/* Frame */}
      <div id='frames'>
        <iframe src={link || linkParam} ></iframe>
      </div>

      {/* Botão Back */}
      {fromMiniCard && (
        <Link to="/ProjectGeral"><IoArrowBackCircleOutline id='back' /></Link>
      )}
    </div>
  )
}

export default ProjectCard
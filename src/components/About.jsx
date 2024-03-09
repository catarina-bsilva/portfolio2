import React from 'react'
import { useContext } from 'react'

import { BsGit, BsBootstrap } from 'react-icons/bs'
import { FaSass, FaHtml5, FaCss3Alt, FaVuejs, FaReact } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'

import { LanguageContext } from '../context'

import Projects from "./Projects"

import CVEN from '../assets/CV/CVEN.pdf'
import CVPT from '../assets/CV/CVPT.pdf'
import CVDE from '../assets/CV/CVDE.pdf'

import './about.sass'

const About = () => {
   //Language Context
   const {language} = useContext(LanguageContext)

   const ScrollToProjects = () => {
      const element = document.getElementById('ProjectsComponent');
      element.scrollIntoView({ behavior: 'smooth' })
      setShowMenu(false)
      }

  return (
    <div id='about' className='dark' onScroll={ScrollToProjects}>
      {/* Titulo Pagina */}
      <h1 className='tituloPagina' id='aboutInicio'>
         &lt;{language === "english" ? "about" : language === "portuguese" ? "sobre" : language === "german" ? "über" : ""}&gt;
      </h1>

      {/* Sobre Mim */}
      <h2 className='titulo' id='primTitulo'>
         {language === "english" ? "About me" : language === "portuguese" ? "Sobre mim" : language === "german" ? "Über mich" : ""}
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium aut neque impedit eaque quibusdam maiores. Iste esse sunt perferendis, ut quam, repellat ipsa voluptatibus deleniti aut veritatis explicabo libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium aut neque impedit eaque quibusdam maiores. Iste esse sunt perferendis, ut quam, repellat ipsa voluptatibus deleniti aut veritatis explicabo libero.</p>

      {/* Tecnologias */}
      <h2 className='titulo'>
         {language === "english" ? "Technologies" : language === "portuguese" ? "Tecnologias" : language === "german" ? "Technologien" : ""}
      </h2>
      <ul id='technologies'>
        <li id='Html'><FaHtml5/></li>
        <li id='Css'><FaCss3Alt/></li>
        <li id='JavaScript'><DiJavascript1/></li>
        <li id='React'><FaReact/></li>
        <li id='Sass'><FaSass/></li>
        <li id='Bootstrap'><BsBootstrap/></li>
        <li id='Git' className='dark'><BsGit/></li>
      </ul>

      {/* Working On */}
      <h2 className='titulo'>
         {language === "english" ? "Working on..." : language === "portuguese" ? "Trabalhando em..." : language === "german" ? "In Arbeit..." : ""}
      </h2>
      <p>{language === "english" ? "Currently i'm learning VueJs and i'm working on new personal projects" :
         language === "portuguese" ? "Atualmente, estou a aprender VueJs e estou a trabalhar em novos projetos pessoais." :
         language === "german" ? "Derzeit lerne ich VueJs und arbeite an neuen persönlichen Projekten." : ""}
      </p>

      {/* Download CV */}
      <div id="containerBtn">
         <button className='Btn dark'>{language === "english" ? <a href={CVEN} download>Download CV </a> :
            language === "portuguese" ? <a href={CVPT} download>Download CV </a> :
            language === "german" ? <a href={CVDE} download>Download CV </a> : ""}</button>
      </div>

      {/* Rodapé Página */}
      <h1 className='tituloPagina' id='aboutFinal'>
         &lt;/{language === "english" ? "about" : language === "portuguese" ? "sobre" : language === "german" ? "über" : ""}&gt;
      </h1>
    </div>
  )
}

export default About
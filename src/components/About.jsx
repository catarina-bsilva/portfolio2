
import { useContext } from 'react'

import { BsGit, BsBootstrap } from 'react-icons/bs'
import { FaSass, FaHtml5, FaCss3Alt, FaVuejs, FaReact } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { SiTypescript } from "react-icons/si"

import { LanguageContext } from '../context'

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
      <p>{language === "english" ? "Hello! I'm Catarina, a passionate Front-End Developer with two years of experience. I specialize in HTML, CSS, JavaScript, and React, and also have experience with Vue, TypeScript, SASS, and Bootstrap. I'm dedicated to creating dynamic and user-friendly web applications and am currently seeking my first professional role to contribute and grow as a developer." : language === "portuguese" ? "Olá! Sou a Catarina, uma Desenvolvedora Front-End apaixonada com dois anos de experiência. Especializo-me em HTML, CSS, JavaScript e React, e também tenho experiência com Vue, TypeScript, SASS e Bootstrap. Estou dedicada a criar aplicações web dinâmicas e amigáveis e, atualmente, estou à procura do meu primeiro emprego profissional para contribuir e crescer como desenvolvedora." : language === "german" ? "Hallo! Ich bin Catarina, eine leidenschaftliche Front-End-Entwicklerin mit zwei Jahren Erfahrung. Ich spezialisiere mich auf HTML, CSS, JavaScript und React und habe auch Erfahrung mit Vue, TypeScript, SASS und Bootstrap. Ich bin engagiert, dynamische und benutzerfreundliche Webanwendungen zu erstellen, und suche derzeit meine erste professionelle Stelle, um als Entwicklerin beizutragen und zu wachsen.h" : ""}</p>

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
        <li id='Vue'><FaVuejs/></li>
        <li id='Typescript'><SiTypescript /></li>
        <li id='Git' className='dark'><BsGit/></li>
      </ul>

      {/* Working On */}
      <h2 className='titulo'>
         {language === "english" ? "Working on..." : language === "portuguese" ? "Trabalhando em..." : language === "german" ? "In Arbeit..." : ""}
      </h2>
      <p>{language === "english" ? "Currently i'm learning Angular and i'm working on new personal projects" :
         language === "portuguese" ? "Atualmente, estou a aprender Angular e estou a trabalhar em novos projetos pessoais." :
         language === "german" ? "Derzeit lerne ich Angular und arbeite an neuen persönlichen Projekten." : ""}
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
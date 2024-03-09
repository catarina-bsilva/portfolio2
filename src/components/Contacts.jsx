import { useContext, useState } from 'react'

import { LanguageContext } from '../context'

import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'
import { BiCopy, BiWorld  } from 'react-icons/bi'

import './contacts.sass'

const Contacts = () => {
  //Links Redes Sociais
  const SocialNetwork = [
    { name: "Linkedin", icon: <FaLinkedin/>, link: "https://www.linkedin.com/in/catabsilva/" },
    { name: "Github", icon: <FaGithub/>, link: "https://github.com/catarina-bsilva" },
    { name: "Instagram", icon: <FaInstagram/>, link: "https://www.instagram.com/catadev" }
  ]

  //Language Context
  const {language} = useContext(LanguageContext)

  //Esconder / Mostrar Mensagem de sucesso 
  const [showMessage, setShowMessage] = useState(false)

  //Copiar Email
  const CopyEmail = (event) => {
    event.preventDefault()

    // Copia o texto do parágrafo com id "Email" para a área de transferência
    const emailText = document.getElementById("email").innerText.trim()
    navigator.clipboard.writeText(emailText)
      .then(() => {
        setShowMessage(true)

        setTimeout(() => {
          setShowMessage(false)
        }, 1000)
      })
  }

  //Copiar Telefone
  const CopyTelefone = (event) => {
    event.preventDefault()

    // Copia o texto do parágrafo com id "Email" para a área de transferência
    const telefoneText = document.getElementById("telefone").innerText.trim()
    navigator.clipboard.writeText(telefoneText)
      .then(() => {
        setShowMessage(true)

        setTimeout(() => {
          setShowMessage(false)
        }, 1000)
      })
  }

  return (
    <div id='contactos' className='dark'>
      {/* Titulo de Pagina */}
      <h1 className='tituloPagina' id='contactsInicio'>
        &lt;{language === "english" ? "contacts" : language === "portuguese" ? "contactos" : language === "german" ? "kontakte" : ""}&gt;
      </h1>

      {/* Mensagem, Email e Telefone  */}
      <div id="BtnContacto" className='dark'>
        {/* Mensagem de sucesso */}
        <p id='mensagem'className={showMessage ? 'showMsg' : ''}>
          {language === "english" ? "	Copied to clipboard" : language === "portuguese" ? "Copiado para área de transferência" : language ===  "german" ? "	In die Zwischenablage kopiert" : ""}
        </p>

        {/* Container Email e Telefone */}
        <div id="ContactBtnContainer">
          <button id='email' className='Btn dark' onClick={CopyEmail}>work@catarinasilva.com <BiCopy/></button>
          <button id='telefone' className='Btn dark' onClick={CopyTelefone}>+41768154802 <BiCopy/></button>
        </div>
      </div>

      {/* Localização */}
      <h2 id='localizacao'><BiWorld/>
        {language === "english" ? "Zurich, Switzerland" : language === "portuguese" ? "Zurique, Suiça" : language === "german" ? "Zürich,          Schweiz": ""}
      </h2>

      {/* Redes Sociais */}
      <section id="SocialNetworks">
        {SocialNetwork.map((Network) => ( //pareteses porque retorna um objecto
          <a href={Network.link} className='SocialBtn' id={Network.name} key={Network.name} target='_blank'>{Network.icon}</a>
        ))}
      </section>

      {/* Rodapé Página */}
      <h1 className='tituloPagina' id='contactsFinal'>
        &lt;/{language === "english" ? "contacts" : language === "portuguese" ? "contactos" : language === "german" ? "kontakte" : ""}&gt;
      </h1>
    </div>
  )
}

export default Contacts
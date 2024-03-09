import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext, LanguageContext } from '../context'
import ReactSwitch from 'react-switch'

import './header.sass'

import Logo from '../assets/logo-rosa.jpg'

const Header = () => {
  //Theme toggle
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isChecked = theme === "dark"

  //Language toggle
  const {language, toggleLanguageEN, toggleLanguagePT, toggleLanguageDE} = useContext(LanguageContext)

  //Switch Button
  const [switchSize, setSwitchSize] = useState({
    width: 70,
    height: 40,
    handleDiameter: 28,
  })
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 451) {
        setSwitchSize({ width: 30, height: 16, handleDiameter: 14 })
      } else if (window.innerWidth >= 450 && window.innerWidth < 601) {
        setSwitchSize({ width: 34, height: 18, handleDiameter: 16 })
      } else if (window.innerWidth >= 601 && window.innerWidth < 851) {
        setSwitchSize({ width: 46, height: 24, handleDiameter: 22 })
      } else if (window.innerWidth >= 851 && window.innerWidth < 1024) {
        setSwitchSize({ width: 62, height: 32, handleDiameter: 30 })
      } else {
        setSwitchSize({ width: 66, height: 34, handleDiameter: 32 })
      }
    }
    window.addEventListener('resize', handleResize)

    // Chama a função uma vez para definir o tamanho inicial corretamente
    handleResize()

    // Limpa o listener quando o componente for desmontado
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div id='header'>
      {/* Logo */}
      <img src={Logo} alt="Logo" id='logo'/>

      {/* Lingua */}
      <ul id='lang'>
        <li onClick={toggleLanguagePT}>PT</li>
        <li onClick={toggleLanguageEN}>EN</li>
        <li onClick={toggleLanguageDE}>DE</li>
      </ul>

      {/* Dark / Light Mode */}
      <div id='mode'>
        <ReactSwitch key={`${switchSize.width}-${switchSize.height}-${switchSize.handleDiameter}`} onColor="#f6f6f6" offColor="#191919" offHandleColor= "#ff7ca1" onHandleColor= "#ff7ca1" onChange={toggleTheme} checked={isChecked} id='botaoswitch' width={switchSize.width} height={switchSize.height} handleDiameter={switchSize.handleDiameter}/>
      </div>

      {/* Frase */}
      <h1 id='frase'>{language === "english" ? "Coding Tomorrow's Web, Today" : language === "portuguese" ? "Codificando a Web do Amanhã, Hoje" :
        language === "german" ? "Die Web von Morgen, Heute programmieren" : ""}
      </h1>

      {/* Nome */}
      <h2 id='nome'>- Catarina Silva</h2>
    </div>
  )
}

export default Header
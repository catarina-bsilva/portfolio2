import Main from './components/Main'
import Header from './components/Header'
import About from "./components/About"
import Contacts from "./components/Contacts"
import Projects from "./components/Projects"
import ProjectsFinal from "./components/ProjectsFinal"
import ProjectCard from "./components/projects/ProjectCard"
import MiniProjectCard from "./components/projects/MiniProjectCard"
import ProjectGeral from "./components/projects/ProjectGeral"

import './app.sass'

import { useState } from 'react'
import { ThemeContext, LanguageContext } from './context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  //Theme toggle
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"))
  }
  //Language toggle
  const [language, setLanguage] = useState("english")
  const toggleLanguageEN = () => setLanguage("english")
  const toggleLanguagePT = () => setLanguage("portuguese")
  const toggleLanguageDE = () => setLanguage("german")

  if (navigator.userAgent.includes("SamsungBrowser")) {
    document.body.classList.add("samsung-internet");
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <LanguageContext.Provider value={{language, toggleLanguageEN, toggleLanguagePT, toggleLanguageDE}}>
      <BrowserRouter basename='/portfolio2'>
        <div id={theme}>
          <header className={theme} >
            <Header/>
          </header>
          <Routes>
            <Route path="*" element={<Main/>}/>
            <Route path="/About" element={<About/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/ProjectsFinal" element={<ProjectsFinal/>} />
            <Route path="/Contacts" element={<Contacts/>} />
            <Route path="/ProjectGeral" element={<ProjectGeral/>} />
            <Route path="/ProjectCard" element={<ProjectCard/>} />
            <Route path="/MiniProjectCard" element={<MiniProjectCard/>} />
            <Route path="/ProjectCard/:id" element={<ProjectCard/>} />
          </Routes>
        </div>
      </BrowserRouter>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App

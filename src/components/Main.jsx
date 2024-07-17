import About from "./About"
import Contacts from "./Contacts"
import Projects from "./Projects"
import ProjectsFinal from "./ProjectsFinal"
import ProjectCard from './projects/ProjectCard'
import Projectos from '../assets/BaseDados.json'

import './Main.sass'

const Main = () => {
  return (
    <div id="containerMain" className='dark'>
      <About/>
      <div id="firstProject" className="cardProject" >
        <Projects/>
        <ProjectCard nome={Projectos[0].name} link={Projectos[0].Link} descricaoEN={Projectos[0].descriçãoEN} descricaoPT={Projectos[0].descriçãoPT} descricaoDE={Projectos[0].descriçãoDE} tecnologias={Projectos[0].tecnologias}/>
      </div>
      <div id="secondProject" className="cardProject" >
        <ProjectCard nome={Projectos[1].name} link={Projectos[1].Link} descricaoEN={Projectos[1].descriçãoEN} descricaoPT={Projectos[1].descriçãoPT} descricaoDE={Projectos[1].descriçãoDE} tecnologias={Projectos[1].tecnologias}/>
      </div>
      <div id="thirdProject" className="cardProject" >
        <ProjectCard nome={Projectos[2].name} link={Projectos[2].Link} descricaoEN={Projectos[2].descriçãoEN} descricaoPT={Projectos[2].descriçãoPT} descricaoDE={Projectos[2].descriçãoDE} tecnologias={Projectos[2].tecnologias}/>
      </div>
      <div id="forthProject" className="cardProject" >
        <ProjectCard nome={Projectos[3].name} link={Projectos[3].Link} descricaoEN={Projectos[3].descriçãoEN} descricaoPT={Projectos[3].descriçãoPT} descricaoDE={Projectos[3].descriçãoDE} tecnologias={Projectos[3].tecnologias}/>
      </div>
      <div id="lastProject" className="cardProject" >
        <ProjectCard nome={Projectos[4].name} link={Projectos[4].Link} descricaoEN={Projectos[4].descriçãoEN} descricaoPT={Projectos[4].descriçãoPT} descricaoDE={Projectos[4].descriçãoDE} tecnologias={Projectos[4].tecnologias}/>
        <ProjectsFinal/>
      </div>
      
      <Contacts/>
    </div>
  )
}

export default Main
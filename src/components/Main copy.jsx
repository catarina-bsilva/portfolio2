import React, { useRef, useEffect } from 'react';

import About from "./About";
import Contacts from "./Contacts";
import Projects from "./Projects";

import './Main.sass';

const Main = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  useEffect(() => {
    // Movendo a definição de mainContainer para aqui garante que está disponível para handleScroll
    const mainContainer = document.getElementById('containerMain');
    
    const sections = [aboutRef, projectsRef, contactsRef]; // Array de refs

    const handleScroll = () => {
      console.log("ScrollTop:", mainContainer.scrollTop);
      console.log("ClientHeight:", mainContainer.clientHeight);
    
      // Ajustando para considerar a altura do cabeçalho fixo.
      const headerHeight = 100; // Ajuste conforme a altura real do seu cabeçalho.
      const scrollPosition = mainContainer.scrollTop + headerHeight; // Considerar o cabeçalho aqui.
    
      // Encontra a seção mais próxima com base na posição atual de scroll.
      let accumulatedHeight = 0; // Inicia a acumulação de altura das seções.
      const closestSection = sections.reduce((closest, current) => {
        if (!current.current) return closest;
        
        // Calcula a diferença entre a posição de scroll e o topo da seção atual, considerando a altura acumulada.
        const currentOffset = Math.abs(accumulatedHeight - scrollPosition);
        accumulatedHeight += current.current.offsetHeight; // Acumula a altura para a próxima iteração.
    
        const closestOffset = closest.offset !== undefined ? Math.abs(closest.offset - scrollPosition) : Infinity;
    
        // Retorna a seção mais próxima ou a atual, baseado na comparação de offsets.
        return currentOffset < closestOffset ? { ref: current, offset: accumulatedHeight } : closest;
      }, {}).ref; // {}.ref para lidar com o caso inicial.
    
      // Se encontrou uma seção mais próxima, faz o scroll para ela.
      if (closestSection && closestSection.current) {
        console.log("Scrolling to:", closestSection.current.offsetTop - headerHeight); // Ajuste para considerar o cabeçalho.
        mainContainer.scrollTo({
          top: closestSection.current.offsetTop - headerHeight,
          behavior: 'smooth'
        });
      }
    };

    let timeoutId = null;

    const onScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 150); // Ajuste o tempo de delay conforme necessário
    };

    mainContainer.addEventListener('scroll', onScroll);

    return () => {
      if (mainContainer) { // Verificação de segurança
        mainContainer.removeEventListener('scroll', onScroll);
      }
    };
  }, []);

  return (
    <div id="containerMain" className='dark' style={{height: '80vh', overflowY: 'scroll'}}>
      <div ref={aboutRef}><About/></div>
      <div ref={projectsRef}><Projects/></div>
      <div ref={contactsRef}><Contacts/></div>
    </div>
  );
}

export default Main;
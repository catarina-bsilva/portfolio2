import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext, LanguageContext } from '../../context';

import Projecto1PrincipalPC from '../../assets/projectos/Projecto1PrincipalPC.png';
import Projecto2PrincipalPC from '../../assets/projectos/Projecto2PrincipalPC.png';
import Projecto3PrincipalPC from '../../assets/projectos/Projecto3PrincipalPC.png';
import Projecto4PrincipalPC from '../../assets/projectos/Projecto4PrincipalPC.png';
import Projecto5PrincipalPC from '../../assets/projectos/Projecto5PrincipalPC.png';
import Projecto6PrincipalPC from '../../assets/projectos/Projecto6PrincipalPC.png';
import Projecto7PrincipalPC from '../../assets/projectos/Projecto7PrincipalPC.png';
import Projecto8PrincipalPC from '../../assets/projectos/Projecto8PrincipalPC.png';
import Projecto1PrincipalTABLET from '../../assets/projectos/Projecto1PrincipalTABLET.png';
import Projecto2PrincipalTABLET from '../../assets/projectos/Projecto2PrincipalTABLET.png';
import Projecto3PrincipalTABLET from '../../assets/projectos/Projecto3PrincipalTABLET.png';
import Projecto4PrincipalTABLET from '../../assets/projectos/Projecto4PrincipalTABLET.png';
import Projecto5PrincipalTABLET from '../../assets/projectos/Projecto5PrincipalTABLET.png';
import Projecto6PrincipalTABLET from '../../assets/projectos/Projecto6PrincipalTABLET.png';
import Projecto7PrincipalTABLET from '../../assets/projectos/Projecto7PrincipalTABLET.png';
import Projecto8PrincipalTABLET from '../../assets/projectos/Projecto8PrincipalTABLET.png';
import Projecto1PrincipalTLM from '../../assets/projectos/Projecto1PrincipalTLM.png';
import Projecto2PrincipalTLM from '../../assets/projectos/Projecto2PrincipalTLM.png';
import Projecto3PrincipalTLM from '../../assets/projectos/Projecto3PrincipalTLM.png';
import Projecto4PrincipalTLM from '../../assets/projectos/Projecto4PrincipalTLM.png';
import Projecto5PrincipalTLM from '../../assets/projectos/Projecto5PrincipalTLM.png';
import Projecto6PrincipalTLM from '../../assets/projectos/Projecto6PrincipalTLM.png';
import Projecto7PrincipalTLM from '../../assets/projectos/Projecto7PrincipalTLM.png';
import Projecto8PrincipalTLM from '../../assets/projectos/Projecto8PrincipalTLM.png';

import './MiniProjectCard.sass';

const imageMap = {
  'Projecto1PrincipalPC.png': Projecto1PrincipalPC,
  'Projecto2PrincipalPC.png': Projecto2PrincipalPC,
  'Projecto3PrincipalPC.png': Projecto3PrincipalPC,
  'Projecto4PrincipalPC.png': Projecto4PrincipalPC,
  'Projecto5PrincipalPC.png': Projecto5PrincipalPC,
  'Projecto6PrincipalPC.png': Projecto6PrincipalPC,
  'Projecto7PrincipalPC.png': Projecto7PrincipalPC,
  'Projecto8PrincipalPC.png': Projecto8PrincipalPC,
  'Projecto1PrincipalTABLET.png': Projecto1PrincipalTABLET,
  'Projecto2PrincipalTABLET.png': Projecto2PrincipalTABLET,
  'Projecto3PrincipalTABLET.png': Projecto3PrincipalTABLET,
  'Projecto4PrincipalTABLET.png': Projecto4PrincipalTABLET,
  'Projecto5PrincipalTABLET.png': Projecto5PrincipalTABLET,
  'Projecto6PrincipalTABLET.png': Projecto6PrincipalTABLET,
  'Projecto7PrincipalTABLET.png': Projecto7PrincipalTABLET,
  'Projecto8PrincipalTABLET.png': Projecto8PrincipalTABLET,
  'Projecto1PrincipalTLM.png': Projecto1PrincipalTLM,
  'Projecto2PrincipalTLM.png': Projecto2PrincipalTLM,
  'Projecto3PrincipalTLM.png': Projecto3PrincipalTLM,
  'Projecto4PrincipalTLM.png': Projecto4PrincipalTLM,
  'Projecto5PrincipalTLM.png': Projecto5PrincipalTLM,
  'Projecto6PrincipalTLM.png': Projecto6PrincipalTLM,
  'Projecto7PrincipalTLM.png': Projecto7PrincipalTLM,
  'Projecto8PrincipalTLM.png': Projecto8PrincipalTLM,
};

const MiniProjectCard = ({ nome, link, FotoPrincipalPC, FotoPrincipalTABLET, FotoPrincipalTLM, id, descricaoEN, descricaoPT, descricaoDE, tecnologias }) => {
  // Theme toggle
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isChecked = theme === "dark";

  // Language toggle
  const { language, toggleLanguageEN, toggleLanguagePT, toggleLanguageDE } = useContext(LanguageContext);

  const [deviceType, setDeviceType] = useState('PC');

  // Update device type based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setDeviceType('TLM');
      } else if (window.innerWidth <= 1028) {
        setDeviceType('TABLET');
      } else {
        setDeviceType('PC');
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to get the correct image based on device type
  const getImagePath = () => {
    switch (deviceType) {
      case 'TLM':
        return imageMap[FotoPrincipalTLM];
      case 'TABLET':
        return imageMap[FotoPrincipalTABLET];
      case 'PC':
      default:
        return imageMap[FotoPrincipalPC];
    }
  };

  return (
    <div id='containerMini' className='dark'>
      {/* Titulo Projecto */}
      <h2 className='tituloMini dark'>{nome}</h2>

      {/* Botão Abrir Projecto */}
      <button className='BtnMini dark'>
        <Link to={`/ProjectCard?id=${id}&nome=${nome}&link=${link}&FotoPrincipalPC=${FotoPrincipalPC}&FotoPrincipalTABLET=${FotoPrincipalTABLET}&FotoPrincipalTLM=${FotoPrincipalTLM}&descricaoEN=${descricaoEN}&descricaoPT=${descricaoPT}&descricaoDE=${descricaoDE}&tecnologias=${tecnologias}&fromMiniCard=true`}>
          {language === "english" ? "Open Project" : language === "portuguese" ? "Abrir Projecto" : language === "german" ? "Projekt öffnen" : ""} 
        </Link>
      </button>

      {/* Frame */}
      <Link to={`/ProjectCard?id=${id}&nome=${nome}&link=${link}&FotoPrincipalPC=${FotoPrincipalPC}&FotoPrincipalTABLET=${FotoPrincipalTABLET}&FotoPrincipalTLM=${FotoPrincipalTLM}&descricaoEN=${descricaoEN}&descricaoPT=${descricaoPT}&descricaoDE=${descricaoDE}&tecnologias=${tecnologias}&fromMiniCard=true`}>
        <div id="frameMini">
          <img src={getImagePath()} alt={`foto ${deviceType} projecto`} id='fotoMini' /> 
        </div>
      </Link>
    </div>
  );
};

export default MiniProjectCard;

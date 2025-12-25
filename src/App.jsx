import MainVisual from './components/sections/MainVisual';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Career from './components/sections/Career';
import Docs from './components/sections/Docs';
import Footer from './components/sections/Footer';
import './styles/global.scss';
import { Tab } from './components/common/Tab';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Popup from './components/common/Popup';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1100, // 애니메이션 지속 시간
      once: true,
      mirror: false, 
    });
  }, []);
  
  return (
    <div>
      <Popup />
      <MainVisual />
      <Tab/>
      <AboutMe/>
      <Projects/>
      <Docs/>
      <Career/>
      <Footer/>
    </div>
  );
}

export default App;
import MainVisual from './components/sections/MainVisual';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Career from './components/sections/Career';
import Notion from './components/sections/Notion';
import Footer from './components/sections/Footer';
import './styles/global.scss';
import { Tab } from './components/common/Tab';

function App() {
  return (
    <div>
      <MainVisual />
      <Tab/>
      <AboutMe/>
      <Career/>
      <Projects/>
      <Notion/>
      <Footer/>
    </div>
  );
}

export default App;
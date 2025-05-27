import MainVisual from './components/sections/MainVisual';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Career from './components/sections/Career';
import Footer from './components/sections/Footer';
import './styles/global.scss';

function App() {
  return (
    <div>
      <MainVisual />
      <AboutMe />
      <Projects />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
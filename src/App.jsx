import './styles/main.scss';

import Cursor from './components/common/Cursor'
import WeatherBanner from './components/layout/WeatherBanner'
import Header from './components/layout/Header'
import MainVisual from './components/sections/MainVisual'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Footer from './components/layout/Footer'

function App() {
  
  return (
    <>
      <Cursor />
      <WeatherBanner/>
      <Header />
      <main>
        <MainVisual />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
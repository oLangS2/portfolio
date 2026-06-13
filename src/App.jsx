import './styles/main.scss';

import Cursor from './components/common/Cursor'
import WeatherBanner from './components/layout/WeatherBanner'
import Header from './components/layout/Header'
import MainVisual from './components/sections/MainVisual'
import Projects from './components/sections/Projects'
import Carrer from './components/sections/Carrer'
import Contact from './components/sections/Contact'


function App() {
  
  return (
    <>
      <Cursor />
      <WeatherBanner/>
      <Header />
      <main>
        <MainVisual />
        <Carrer />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
import './styles/main.scss';

import Cursor from './components/common/Cursor'
import WeatherBanner from './components/layout/WeatherBanner'
import Header from './components/layout/Header'
import MainVisual from './components/sections/MainVisual'
import Projects from './components/sections/Projects'
import Career from './components/sections/Career'
import Contact from './components/sections/Contact'
import { useEffect, useState } from 'react';


function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  return (
    <>
      <Cursor />
      <WeatherBanner/>
      <Header dark={dark} setDark={setDark} />
      <main>
        <MainVisual />
        <Career />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
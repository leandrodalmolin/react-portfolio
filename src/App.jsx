import { NavBar } from './components/layouts/NavBar';
import { About } from './components/sections/About';
import { Home } from './components/sections/Home';
import { Projects } from './components/sections/Projects';
import { Tech } from './components/sections/Tech';
import { Work } from './components/sections/Work';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Tech />
      <Work />
      <Projects />
    </>
  )
}

export default App

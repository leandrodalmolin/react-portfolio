import { NavBar } from './components/layouts/NavBar';
import { About } from './components/sections/About';
import { Home } from './components/sections/Home';
import { Projects } from './components/sections/Projects';
import { Tech } from './components/sections/Tech';
import { WorkAlternate } from './components/sections/WorkAlternate';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <WorkAlternate />
      <Projects />
      <Tech />
      <About />
    </>
  )
}

export default App

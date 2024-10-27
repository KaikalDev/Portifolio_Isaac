import AboutMe from './Sections/AboutMe'
import Conhecimento from './Sections/Conhecimentos'
import Experiences from './Sections/Experience'
import Footer from './Sections/Footer'
import Home from './Sections/Home'
import Projects from './Sections/Projects'
import { GlobalStyles } from './styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
      <AboutMe />
      <Experiences />
      <Conhecimento />
      <Projects />
      <Footer />
    </>
  )
}

export default App

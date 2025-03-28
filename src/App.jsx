
import './App.css'
import { Courses } from './components/Courses'
import { Footer } from './components/Footer'
import { Intro } from './components/Intro'
import { MobileNav } from './components/MobileNav'
import { Nav } from './components/Nav'
import { NavProvider } from './context/NavContext'
function App() {
  return (
    <NavProvider>
      <Nav/>
      <Intro/>
      <Courses/>
      <MobileNav/>
      <Footer/>
    </NavProvider>
  )
}

export default App

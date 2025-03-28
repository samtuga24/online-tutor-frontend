
import './App.css'
import { Footer } from './components/Footer'
import { MobileNav } from './components/MobileNav'
import { Nav } from './components/Nav'
import { NavProvider } from './context/NavContext'
function App() {
  return (
    <NavProvider>
      <Nav/>
      <Footer/>
      <MobileNav/>
    </NavProvider>
  )
}

export default App

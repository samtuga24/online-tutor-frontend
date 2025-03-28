
import './App.css'
import { MobileNav } from './components/MobileNav'
import { Nav } from './components/Nav'
import { NavProvider } from './context/NavContext'
function App() {
  return (
    <NavProvider>
      <Nav/>
      <MobileNav/>
    </NavProvider>
  )
}

export default App

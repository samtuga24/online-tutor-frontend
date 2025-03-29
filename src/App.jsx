
import { HashRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Courses } from './components/Courses'
import { Footer } from './components/Footer'
import { Intro } from './components/Intro'
import { MobileNav } from './components/MobileNav'
import { Nav } from './components/Nav'
import { NavProvider } from './context/NavContext'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
function App() {
  return (
    <NavProvider>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>
        </Routes>
      </HashRouter>
    </NavProvider>
  )
}

export default App

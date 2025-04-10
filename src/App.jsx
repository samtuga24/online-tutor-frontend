
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
import { TutorSignUp } from './pages/TutorSignUp'
import { StudentSignUp } from './pages/StudentSignUp'
import { StudentDashboard } from './pages/StudentDashboard'
function App() {
  return (
    <NavProvider>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path="register-tutor" element={<TutorSignUp/>}/>
          <Route path="register-student" element={<StudentSignUp/>}/>
          <Route path="student-dashboard" element={<StudentDashboard/>}/>
        </Routes>
      </HashRouter>
    </NavProvider>
  )
}

export default App

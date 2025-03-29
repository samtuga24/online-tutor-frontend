import React, { useContext, useState } from 'react'
import logo from '../assets/logo.jpg'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import NavContext from '../context/NavContext'
import { Link, Links } from 'react-router-dom'
export const Nav = () => {
  const { hamburger, setHamburger } = useContext(NavContext);
  const clickHamburger = () => {
    setHamburger(!hamburger)

  }
  const [close, setClose] = useState(false)
  // console.log(hamburger)
  return (
    <div className='nav-container'>
        <div className="logo-wrap"><img src={logo} alt="" /></div>
        <div className="nav-menu">
          <ul>
            <li><Link to="/" className='nav-link'>Home</Link></li>
            <li>Categories</li>
          </ul>
          <div className="nav-search">
            <div className="search-icon"><FaMagnifyingGlass/></div>
            <div className="search-wrap">
              <input type="text" name='course' placeholder='Search' className='search-text'/>
            </div>
          </div>
        </div>
        <div className="nav-buttons">
          <div className="sign-in"><Link to="../login" className='nav-link'>Login</Link></div>
          <div className="sign-up"><Link to="../signup" className='nav-link-up'>Sign Up</Link></div>
          <div className="mobile-nav"><FaBars onClick={clickHamburger}/></div>
        </div>
    </div>
  )
}

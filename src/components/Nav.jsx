import React, { useContext, useState } from 'react'
import logo from '../assets/logo.jpg'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import NavContext from '../context/NavContext'
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
            <li>Home</li>
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
          <div className="sign-in">Login</div>
          <div className="sign-up"> Sign Up</div>
          <div className="mobile-nav"><FaBars onClick={clickHamburger}/></div>
        </div>
    </div>
  )
}

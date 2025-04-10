import React, { useContext } from 'react'
import { FaBars, FaMagnifyingGlass } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import NavContext from '../context/NavContext';
import logo from '../assets/logo.jpg'
import { MdAccountCircle } from 'react-icons/md';
export const UserNav = () => {
    const { hamburger, setHamburger } = useContext(NavContext);
    const clickHamburger = () => {
      setHamburger(!hamburger)
  
    }
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
      <div className='account-wrap'>
        <div className="acc-icon"><MdAccountCircle/></div>
        <div className="acc-name">Hi, Samtuga</div>
      </div>
      <div className="mobile-nav"><FaBars onClick={clickHamburger}/></div>
    </div>
</div>
  )
}

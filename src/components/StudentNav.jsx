import React from 'react'
import { FaBars, FaMagnifyingGlass } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { MdAccountCircle } from 'react-icons/md'

export const StudentNav = () => {
  return (
        <div className='nav-container'>
        <div className="logo-wrap"><img src={logo} alt="" /></div>
        <div className="nav-menu">
          <ul>
            <li><Link to="/" className='nav-link'>Dashboard</Link></li>
            <li>Courses</li>
            <li>Tutors</li>
            <li>Calendar</li>
            <li>Messages</li>
          </ul>
        </div>
        <div className="nav-buttons">
          <div className='account-wrap'>
            <div className="acc-icon"><MdAccountCircle/></div>
            <div className="acc-name">Hi, Samtuga</div>
          </div>
          {/* <div className="mobile-nav"><FaBars onClick={clickHamburger}/></div> */}
        </div>
    </div>
  )
}

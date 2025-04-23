import React, { useContext } from 'react'
import { Link, Links } from 'react-router-dom'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import NavContext from '../context/NavContext';
export const MobileNav = () => {
    const {hamburger, setHamburger} = useContext(NavContext);
    console.log(hamburger)
    return (
        
        <div className='m-nav-container' id={hamburger ? 'slide-in' : null}>
            <div className="mobile-nav-search">
                <div className="search-icon"><FaMagnifyingGlass /></div>
                <div className="mobile-search-wrap">
                    <input type="text" name='course' placeholder='Search' className='search-text' />
                </div>
            </div>
            <div className="m-nav-wrap">
                <div className="m-list">
                    <Link className="ml-1 m-nav-link" to='../login' ><div>Login</div></Link>
                    <Link className="ml-1 m-nav-link" to='../signup' ><div>Sign up</div></Link>
                </div>
            </div>
        </div>
    )
}

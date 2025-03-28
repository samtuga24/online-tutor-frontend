import React, { createContext, useState } from 'react'
const NavContext = createContext();
export function NavProvider({ children }){
    const [hamburger, setHamburger] = useState(false);
  return (
    <>
    <NavContext.Provider value={{ hamburger, setHamburger }}>
        {children}
    </NavContext.Provider>
</>
  )
}
export default NavContext;
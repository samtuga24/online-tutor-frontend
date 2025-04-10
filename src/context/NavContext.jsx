import React, { createContext, useState } from 'react'
const NavContext = createContext();
export function NavProvider({ children }){
    const [hamburger, setHamburger] = useState(false);
    const [role, setRole] = useState("");
  return (
    <>
    <NavContext.Provider value={{ hamburger, setHamburger, role, setRole }}>
        {children}
    </NavContext.Provider>
</>
  )
}
export default NavContext;
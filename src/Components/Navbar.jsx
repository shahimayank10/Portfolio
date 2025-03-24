import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const linkClass=(e)=>{
        return [
            e.isActive? "text-blue-300":"",
            e.isActive?  "font-bold":"",
        ].join(" ");
    }
 

  return (
    <nav className="w-[100vw] h-[8vh] bg-red-200 flex items-center justify-around p-14 font-extrabold text-2xl">
    
    <NavLink to="/" className={linkClass}>Home</NavLink>
    <NavLink to="/about" className={linkClass}>About</NavLink>
    <NavLink to="/skills" className={linkClass}>Skills</NavLink>
    <NavLink to="/projects" className={linkClass}>Projects</NavLink>
    </nav>
  );
};

export default Navbar;
 
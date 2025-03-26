import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const linkClass=(e)=>{
        return [
            e.isActive? "text-black":"",
            e.isActive?  "font-extrabold":"",
        ].join(" ");
    }
 

  return (
    <nav className="w-full h-[8vh] bg-[#F5F5F5] text-[#3a3a3a] flex items-center sm:justify-center  md:justify-end font-bold text-2xl }">
    
    <div className='md:w-1/2 sm:w-full flex items-center sm:justify-around md:justify-around'>
    <NavLink to="/" className={linkClass}>Home</NavLink>
    <NavLink to="/about" className={linkClass}>About</NavLink>
    <NavLink to="/skills" className={linkClass}>Skills</NavLink>
    <NavLink to="/projects" className={linkClass}>Projects</NavLink>
    
    </div>
    </nav>
  );
};

export default Navbar;
 
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
    <nav className="w-[100vw] h-[8vh] bg-[#F5F5F5] flex items-center justify-end p-14 font-extrabold text-2xl fixed">
    
    <div className='w-[50vw] bg-pink-200 flex items-center justify-around'>
    <NavLink to="/" className={linkClass}>Home</NavLink>
    <NavLink to="/about" className={linkClass}>About</NavLink>
    <NavLink to="/skills" className={linkClass}>Skills</NavLink>
    <NavLink to="/projects" className={linkClass}>Projects</NavLink>
    
    </div>
    </nav>
  );
};

export default Navbar;
 
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
    <nav className="w-[100vw] h-[8vh] bg-[#F5F5F5] flex items-center sm:justify-center sm:font-bold sm:text-xl  md:justify-end md:font-extrabold md:text-2xl }">
    
    <div className='md:w-[50vw] sm:w-[80vw] sm:px-4 bg-pink-200 flex items-center sm:justify-between md:justify-around'>
    <NavLink to="/" className={linkClass}>Home</NavLink>
    <NavLink to="/about" className={linkClass}>About</NavLink>
    <NavLink to="/skills" className={linkClass}>Skills</NavLink>
    <NavLink to="/projects" className={linkClass}>Projects</NavLink>
    
    </div>
    </nav>
  );
};

export default Navbar;
 
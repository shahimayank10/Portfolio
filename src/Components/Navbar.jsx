import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';




const Navbar = () => {


  const [mode,setMode]=useState(true);


    const linkClass=(e)=>{
        return [
            e.isActive? "text-black":"",
            e.isActive? "border-b-2":""
        ].join(" ");
    }
 

  return (
    <nav className="w-full h-[8vh] bg-[#F5F5F5] flex items-center sm:justify-center  md:justify-end font-bold text-2xl }">
    
    <div className='md:w-1/2 sm:w-full flex items-center sm:justify-around md:justify-around'>
    <NavLink to="/" className={linkClass}>Home</NavLink>
    <NavLink to="/about" className={linkClass}>About</NavLink>
    <NavLink to="/projects" className={linkClass}>Projects</NavLink>
    <div onClick={()=>setMode(()=>!mode)} className="cursor-pointer">
      {mode?(<LightModeIcon  fontSize="large"/>):(<DarkModeIcon  fontSize="large"/>)}
    </div>
    
    </div>
    </nav>
  );
};

export default Navbar;
 
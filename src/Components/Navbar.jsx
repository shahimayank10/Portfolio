import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useContext } from 'react';
import { ProfileData } from '../context/Context';




const Navbar = () => {



  const {mode,setMode}=useContext(ProfileData);


    const linkClass=(e)=>{
        return [
            e.isActive? "font-semibold sm:font-bold":"",
            e.isActive? "border-b-2":""
        ].join(" ");
    }
 

  return (
    <nav className={`w-full h-[8vh] ${mode ? "bg-[#F5F5F5]" : "bg-zinc-700"  }  flex items-center justify-center md:justify-end sm:font-bold text-2xl `}>
    
    <div className={`sm:w-1/2 w-full flex items-center justify-around md:justify-around  ${mode ? "text-black" : "text-white"}  `}>
    <NavLink to="/" className={linkClass }>Home</NavLink>
    <NavLink to="/about"  className={linkClass}>About</NavLink>
    <NavLink to="/projects"  className={linkClass}>Projects</NavLink>
    <div onClick={()=>setMode(()=>!mode)} className="cursor-pointer">
      {mode?(<LightModeIcon  fontSize="large"/>):(<DarkModeIcon  fontSize="large" color='white'/>)}
    </div>
    
    </div>
    </nav>
  );
};

export default Navbar;
 
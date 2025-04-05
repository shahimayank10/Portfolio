import { useContext } from "react";
import React from 'react'
import { ProfileData } from "../context/Context";

const Skill = ({data}) => {

  const {mode,setMode}=useContext(ProfileData);

    return (
    <a href={data.link} className={` ${mode ? "bg-[#dad7d7]" : "bg-zinc-700"} rounded h-auto w-32 p-4`}>

      <img src={data.image} alt={data.name} className='w-full h-'/>
      <h1 className='text-xl font-bold text-center py-2'>{data.name}</h1>
    </a>
  )
}

export default Skill

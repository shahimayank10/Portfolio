import React, { useState } from 'react'
import Cardinfo from './Cardinfo'
import { useContext} from 'react';
import { ProfileData }  from '../context/Context'

const Home = () => {

  const {mode,setMode}=useContext(ProfileData);
 

  return (
    <div className={`w-full h-[92vh] py-12 flex flex-col items-center justify-center gap-10 ${mode? "bg-zinc-50":"bg-zinc-800"}`}>
      
    <Cardinfo/>
    </div>
  )
}

export default Home

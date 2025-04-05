import React from 'react'
import Cardinfo from './Cardinfo'
import Projectbox from './Projectbox'
import { useContext } from 'react'
import { ProfileData } from '../context/Context'

const Projects = () => {

  const {ProjectDetails,mode,setMode} = useContext(ProfileData);
  // console.log(ProjectDetails);
  

  return (
    <div className={` w-full h-auto py-8 ${mode? "bg-zinc-50":"bg-zinc-800"}`}>
          <div id='project' className=' h-auto rounded sm:flex sm:flex-col md:flex md:flex-row '>
          <div id='left' className='flex justify-center  py-4 w-full sm:w-2/5'>
                    <Cardinfo/>
                  </div>

                  <div id='right' className={`w-full  h-auto text-xl flex flex-col gap-4 font-bold p-4 `}>

                
                {ProjectDetails.map((item,index)=><Projectbox key={index} mode={mode} data={item}/>)} 
                
                  </div>

            </div>
    </div>
  )
}

export default Projects

import React from 'react'
import Cardinfo from './Cardinfo'
import Projectbox from './Projectbox'
import { useContext } from 'react'
import { ProfileData } from '../context/Context'

const Projects = () => {

  const {ProjectDetails} = useContext(ProfileData);
  // console.log(ProjectDetails);
  

  return (
    <div className=' w-full h-auto p-8 '>
            <div id='project' className=' h-auto rounded sm:flex sm:flex-col md:flex md:flex-row '>

                  <div id='left' className='px-8 bg-red-200 py-4 w-auto'>
                    <Cardinfo/>
                  </div>

                  <div id='right' className='w-full bg-blue-300 h-auto text-xl flex flex-col gap-4 font-bold p-4 '>

                
                {ProjectDetails.map((item,index)=><Projectbox key={index} data={item}/>)} 
                
                  </div>

            </div>
    </div>
  )
}

export default Projects

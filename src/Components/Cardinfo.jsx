import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useContext} from 'react';
import { ProfileData }  from '../context/Context'

const Cardinfo = () => {

const {mode,setMode}=useContext(ProfileData);

  // 
  return (
    <div className={`w-[320px] p-4 h-[700px] flex flex-col items-center gap-4 ${mode ? "bg-[#F5F5F5]" : "bg-zinc-700"} rounded-2xl justify-around`}>
        
      <div className={`h-[300px] w-full bg-[url("/pic.jpg")] bg-cover bg-center rounded-lg m-4  ${mode?"text-black":"text-white"} `}></div>

      <h1 className={`font-bold text-2xl capitalize text-center ${mode?"text-black":"text-white"}`}>Hi! I'm Mayank Shahi <br />Frontend Developer</h1>

      <div className={`my-8 w-full flex px-1 items-center justify-around  ${mode?"text-black":"text-white"}`} id='social'>

        <a href="https://www.linkedin.com/in/mayank-shahi-311a86232/" className='opacity-50 hover:opacity-100 transition duration-100'>
        <LinkedInIcon fontSize="large"/>
        </a>

        <a href="mailto:shahimayank10@gmail.com" className='opacity-50 hover:opacity-100 transition duration-100'>
        <EmailIcon fontSize="large"/>
        </a>
       
       <a href="https://github.com/shahimayank10?tab=repositories" className='opacity-50 hover:opacity-100 transition duration-100'>
       <GitHubIcon fontSize="large"/>
       </a>
      
       </div>

       {/* Resume Download */}
       <a href="/MayankShahi_Resume.pdf" download="MayankShahi_Resume.pdf">
            <button className={`${mode? "bg-black text-white  hover:bg-white hover:text-black":"bg-zinc-100 text-black hover:bg-black hover:text-white" }
             cursor-pointer border-2 font-bold rounded-xl p-4 transition duration-300`}>
              Download Resume
            </button>
       </a>


   
    </div>
  )
}

export default Cardinfo

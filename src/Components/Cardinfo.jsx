import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Cardinfo = ({skills}) => {
  return (
    <div className='w-[320px] p-4 flex flex-col items-center gap-4 bg-[#F5F5F5] rounded-2xl justify-around'>
        
      <div className='h-[300px] w-[100%] bg-[url("/pic.jpg")] bg-cover bg-center rounded-lg m-4'></div>

      <h1 className='font-bold text-2xl capitalize text-center'>Hi! I'm Mayank Shahi <br />Frontend Developer</h1>

      <div className='my-8 w-full flex px-1 items-center justify-around' id='social'>

        <a href="https://www.linkedin.com/in/mayank-shahi-311a86232/" className='opacity-50 hover:opacity-100 transition duration-100'>
        <LinkedInIcon fontSize="large"/>
        </a>

        <a href="mailto:example@example.com" className='opacity-50 hover:opacity-100 transition duration-100'>
        <EmailIcon fontSize="large"/>
        </a>
       
       <a href="https://github.com/shahimayank10?tab=repositories" className='opacity-50 hover:opacity-100 transition duration-100'>
       <GitHubIcon fontSize="large"/>
       </a>
      
       </div>

       {/* Resume Download */}
       <a href="/MayankShahi_Resume.pdf" download="MayankShahi_Resume.pdf">
            <button className="bg-black text-white p-4 hover:bg-white hover:text-black cursor-pointer border-2 font-bold rounded transition duration-300">
              Download Resume
            </button>
       </a>


   
    </div>
  )
}

export default Cardinfo

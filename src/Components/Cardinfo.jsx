import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Cardinfo = () => {
  return (
    <div className=' bg-[#a49c9c] h-[60vh] w-[340px] p-[10px] flex flex-col items-center justify-evenly'>
        
      <div className='h-[35vh] w-[70%] bg-[url("public/pic.jpg")] p-5 bg-cover bg-center rounded-lg m-4'></div>
      <h1 className='font-bold text-xl'>Hi! I'm Mayank Shahi</h1>

      <div className='text-black-200  p-10 w-full flex items-center justify-evenly' id='social'>

        <a href="https://www.linkedin.com/in/mayank-shahi-311a86232/" className='opacity-50 hover:opacity-100 transition duration-100'>
        <LinkedInIcon/>
        </a>

        <a href="mailto:example@example.com" className='opacity-50 hover:opacity-100 transition duration-100'>
        <EmailIcon/>
        </a>
       
       <a href="https://github.com/shahimayank10?tab=repositories" className='opacity-50 hover:opacity-100 transition duration-100'>
       <GitHubIcon/>
       </a>
      
       </div>

       {/* Resume Download */}
       <a href="public/MayankShahi_Resume.pdf" download="MayankShahi_Resume.pdf">
            <button className="bg-blue-500 w-25 hover:bg-blue-600 cursor-pointer text-white font-bold py-2 px-4 rounded transition duration-300">
              Download Resume
            </button>
       </a>


   
    </div>
  )
}

export default Cardinfo

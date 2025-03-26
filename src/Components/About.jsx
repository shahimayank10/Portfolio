import React from 'react'
import Cardinfo from './Cardinfo'

const About = () => {
  return (
    <div className=' w-full h-auto  p-8 relative'>
            <h1 className=' h-auto rounded flex  '>
                  <div id='left' className='p-8 w-auto '>
                    <Cardinfo/>
                  </div>
                  <div id='right' className='w-auto h-auto text-xl font-bold p-4'>
                  <h2 className='boader-bottom'>
                    <div id='box' className='w-full h-auto rounded-2xl bg-[#F5F5F5] px-2 py-4'>
                    Hi, I'm Mayank Shahi, a passionate front-end developer with a keen interest in crafting engaging and user-friendly web experiences. Proficient in JavaScript and experienced in building responsive web applications using React.js.
                    <br />
                    I have a solid foundation in front-end technologies like HTML and CSS and am well-versed in modern design frameworks including Bootstrap and Tailwind CSS. Additionally, I have hands-on experience with C++, which strengthens my problem-solving abilities.
                    <br />
                    My goal is to create intuitive and efficient web interfaces that enhance user experiences. I’m constantly learning and exploring new technologies to stay updated in the ever-evolving world of web development.
                    </div>
                    </h2>

            
                    </div>

            </h1>
    </div>
  )
}

export default About

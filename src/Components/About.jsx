import React, { useState } from 'react'
import Cardinfo from './Cardinfo'
import Skill from './Skill'

const About = () => {

   const [skills, setSkills] = useState([
      { id: 1, name: 'ReactJs', image: 'reactjs.svg', link: 'https://reactjs.org/' },
      { id: 2, name: 'JavaScript', image: 'javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { id: 3, name: 'HTML', image: 'html.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { id: 4, name: 'CSS', image: 'css.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { id: 5, name: 'C++', image: 'cpp.svg', link: 'https://www.geeksforgeeks.org/c-plus-plus/' },
      { id: 6, name: 'MySql', image: 'sql.svg', link: 'https://www.mysql.com/' },
      { id: 7, name: 'Bootstrap', image: 'bootstrap.svg', link: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/' },
      { id: 8, name: 'Tailwind', image: 'tailwind.svg', link: 'https://tailwindcss.com/' },
      
    ]);


  return (
    <div className=' w-full h-auto p-8 '>
            <div id='about' className=' h-auto rounded sm:flex sm:flex-col md:flex md:flex-row '>
                  <div id='left' className='px-8 py-4 w-auto'>
                    <Cardinfo/>
                  </div>

                  <div id='right' className='w-full h-auto text-xl flex flex-col gap-4 font-bold p-4 '>
                 
                    <div id='myself' className='w-full h-auto rounded-2xl p-4 bg-[#F5F5F5]'>

                      <h1 className='text-2xl uppercase font-extrabold'>Myself</h1>
                      
                      <br />
                    <h3>Hi, I'm Mayank Shahi, a passionate front-end developer with a keen interest in crafting engaging and user-friendly web experiences. Proficient in JavaScript and experienced in building responsive web applications using React.js.
                    <br />
                    I have a solid foundation in front-end technologies like HTML and CSS and am well-versed in modern design frameworks including Bootstrap and Tailwind CSS. Additionally, I have hands-on experience with C++, which strengthens my problem-solving abilities.
                    <br />
                    My goal is to create intuitive and efficient web interfaces that enhance user experiences. I’m constantly learning and exploring new technologies to stay updated in the ever-evolving world of web development.
                   </h3>
                     </div>
                  
                  <div id='skills' className='w-full h-auto p-4 rounded-2xl bg-[#F5F5F5]'>
                  <h1 className='text-2xl uppercase font-extrabold'>Skills</h1>
                   <br />

                  <div id="skillbox" className='w-full h-auto  flex gap-4 items-center flex-wrap '>
                      {skills.map((item,index)=> <Skill data={item} key={index}/>)} 
                  
                  </div>
                 
                  </div>

            
                    </div>

            </div>
    </div>
  )
}

export default About

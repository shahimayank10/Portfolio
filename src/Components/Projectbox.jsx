import React from 'react'
import LinkIcon from '@mui/icons-material/Link';

const Projectbox = ({data,mode}) => {

  
  return (
    <div  className={`w-full h-auto p-4 rounded-2xl flex flex-col gap-1 ${mode ? "bg-[#F5F5F5]" : "bg-[#323236]"} ${mode?"text-black":"text-white"}`}>
      <h1 className='text-2xl font-extrabold uppercase'>{data.title}</h1>
      <hr />
      <h3 className='font-medium'>{data.tech}/({data.duration}) </h3>
      <p className='font-medium text-[1rem] py-1'>{data.description}</p>
      <a href={data.link} className='text-blue-400'><LinkIcon/>link</a>
    </div>
  )
}

export default Projectbox

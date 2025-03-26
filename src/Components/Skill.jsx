import React from 'react'

const Skill = ({data}) => {

    return (
    <a href={data.link} className='bg-[#dad7d7] rounded h-auto w-32 p-4'>

      <img src={data.image} alt={data.name} className='w-full h-'/>
      <h1 className='text-xl font-bold text-center py-2'>{data.name}</h1>
    </a>
  )
}

export default Skill

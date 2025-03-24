import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
    </div>
  )
}

export default Routing

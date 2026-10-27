import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate =useNavigate()
  return (
    <div>
    <h1>hii this is home page</h1>  
    <button onClick={()=>navigate('/About')}>go to next page</button>
    </div>
  )
}

export default Home

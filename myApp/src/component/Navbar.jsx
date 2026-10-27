import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav >
      <ul style={{gap:20,listStyle:'none',display:'flex',justifySelf:'center'}}>
          <li><Link to='/'>home</Link></li>
       <li> <Link to='/about'>about</Link></li>
       <li> <Link to='/product'>product</Link></li>
       <li> <Link to='/settings'>settings</Link></li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar

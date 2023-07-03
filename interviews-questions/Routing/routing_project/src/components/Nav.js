import React from 'react'
import './CSS/Nav.css'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <>
      <div className='nav-style'>
          <Link to={'/'} ><h3 className='home-link'>home comp</h3></Link>
          <Link to={'/about'}><h3 className='home-link'>about comp</h3></Link>

      </div>
    </>
  )
}

export default Nav
import React from 'react'
import './CSS/Nav.css'
import { Link } from 'react-router-dom'
//dynamic components
import { Outlet } from 'react-router-dom'

function Nav() {
  return (
     <>
      <div className='nav-style'>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/favroutes"}>Favourites</Link></li>
          </ul>
      </div>
      <Outlet/>
     </>
  )
}

export default Nav
import React from 'react'
import {Link} from 'react-router-dom'


function Nav() {
  return (
    <> 
      
      <Link to={'/'}>Home comp</Link> <br></br>
      <Link to={'/about'}>About comp</Link>

    </>
  )
}

export default Nav
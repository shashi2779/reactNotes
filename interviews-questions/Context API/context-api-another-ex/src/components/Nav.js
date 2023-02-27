import React,{useContext} from 'react';
import context from './Context';

function Nav() {
    const theme = useContext(context)
    // console.log(theme)
  return (
     <>
    <div className={theme?"dark":"light"}>
        Nav
    </div>
    </>
  )
}

export default Nav
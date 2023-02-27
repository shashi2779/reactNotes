import React, { useContext } from 'react'
//import createContext in data,data1
import {data,data1} from '../App.js'

function ChildC() {
    const firstName = useContext(data)
    const vill = useContext(data1)

  return (
    <>
    <h1>hello, my Name is {firstName} and i am from {vill}</h1>
    </>
  )
}

export default ChildC
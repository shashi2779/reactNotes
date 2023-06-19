import React from 'react'
// esse hamm dispatch kar sakte hai apne "action" ko
// action triger karne ke lite
import { useDispatch } from 'react-redux';
//  useSelector hai state se value accesss karne ke liye
import { useSelector } from 'react-redux';

function Home() {

    let dispatch = useDispatch()

    // const counter = useSelector(state => state.custom.c)
    // c ko extract kiye 
    const {c}= useSelector(state => state.custom)

    let addBtn = () =>{
        dispatch({
            type:"increment"
        })
    }

    let addBtn25 = () =>{
        dispatch({
            type:"incrementByValue",
            payload:25
        })
    }

    let subBtn = () =>{
        dispatch({
            type:"decrement"
        })
    }
  return (
    <>
     <h1>{c}</h1>
     <button onClick={addBtn}>+</button>
     <button onClick={addBtn25}>increment by 25</button>
     <button onClick={subBtn}>-</button>
    </>
  )
}

export default Home
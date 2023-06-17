import React, { useState } from 'react'
import useCounter from './useCounter'


function Count_1() {
  const [count, Increment, Decrement] = useCounter(10)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </>
  )
}

export default Count_1
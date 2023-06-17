import React from 'react'
import useCounter from './useCounter'

function Count_2() {
  const [count, Increment, Decrement] = useCounter()
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </>
  )
}

export default Count_2
import React from 'react'

function ErrorComponent() {
  return (
     <>
      <div style={{width:'100vw',height:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <h2>oops! something went wrong!</h2>
          <p>404 not found!</p>
      </div>
     </>
  )
}

export default ErrorComponent
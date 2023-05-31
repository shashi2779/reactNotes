import { useState,useEffect, useLayoutEffect } from 'react';
import './App.css';

function App() {
  const [text,setText] = useState("Loading................................")

  // useEffect(()=>{
  //   setText('Done')
  // })

  useLayoutEffect(()=>{
    setText('Done')
  })

  return (
   <>
   <h1>{text}</h1>
   </>
  );
}

export default App;

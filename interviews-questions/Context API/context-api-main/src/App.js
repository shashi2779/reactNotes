import './App.css';
import Child from './components/Child';
import React, { createContext ,useState } from 'react';
// export kiye "global state" ko
export const context = createContext()

function App() {
  const [color,setColor] = useState('yellow')
  return (
    <context.Provider value={color}>
      <>
        <h1>app comp</h1>
        <Child />
      </>
    </context.Provider>
  );
}

export default App;

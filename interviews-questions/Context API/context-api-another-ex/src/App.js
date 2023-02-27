import './App.css';
import context from './components/Context'
import {useState} from 'react';
import Nav from './components/Nav'

function App() {
  const[theme,setTheme] = useState(false)
  
  return (
    <context.Provider value={theme}>
      <button onClick={()=>setTheme(!theme)}>change theme</button>
       <Nav/>
    
    </context.Provider>
  );
}

export default App;

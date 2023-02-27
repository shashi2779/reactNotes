import './App.css';
import context from './components/Context'
import { useState } from 'react';
import Nav from './components/Nav'


// In Context API
// how to use it = ?
// create , provider , useContext
// provider => data provide in our components 
//useContext  => component me "global store" se value nikalna with useContext.


function App() {
  const [theme, setTheme] = useState(false)

  return (
    <context.Provider value={theme}>

      {/* "App.css" me .light & .dark class banayi h "Nav" prr lagane k liye*/}
      <button onClick={() => setTheme(!theme)}>change theme</button>
      <Nav />

    </context.Provider>
  );
}

export default App;

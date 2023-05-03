### Context API
- components --> Context.js
```js
// import React from 'react';
// const context = React.createContext();


// In Context API
// how to use it = ?
// create , provider , useContext
// create [ const context = createContext() ] , provider [ <context.Provider> ] , useContext [ const theme = useContext(context) ]
// provider => data provide in our components 
// useContext  => component me "global store" se value nikalna with useContext.

// createContext -> context.provider ->
// context.js -> App.js -> 

import {createContext} from 'react';
const context = createContext()

export default context;

```
- App.js
```js
import './App.css';
import { useState } from 'react';
import Nav from './components/Nav'
import context from './components/Context'


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

```
- Nav.js
```js
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

```
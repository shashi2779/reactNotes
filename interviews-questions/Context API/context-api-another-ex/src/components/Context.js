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

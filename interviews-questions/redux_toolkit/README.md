## Redux Toolkit :
- npx create-next-app project_name   ||   npx creat-react-app project_name
- npm install @reduxjs/toolkit react-redux




### store.js
- pahle [redux] me
```js
```
- abb [redux toolkit] me
```js
// replace createStore [redux] to configureStore [redux toolkit]
import { configureStore } from '@reduxjs/toolkit'
import { customReducer } from './Reducer'

 const store = configureStore({
    // multiple reducer pass karne ke liye "combineReducers" jo use karte the redux me ,
    // wha redux toolkit me "reducer" likh k kayi reducer pass karr sakte hai
    // eg. ballReducer , batReducer , userReducer
    reducer:{
       custom:customReducer
    }
})


export default store

```

### Reducer.js
- pahle [redux] me
```js
// note : pahle har ek chij k liye alag alag reducer banate the
// CounterReducer.js , UserReducer.js , .... etc

const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + 1 }
    case 'decrement':
      return { ...state, value: state.value - 1 }
    case 'incrementByAmount':
      return { ...state, value: state.value + action.payload }
    default:
      return state
  }
}

```
- abb [redux toolkit] me
- abb sabka reducer ek hi me likh sakte hai
```js

import { createAction, createReducer } from '@reduxjs/toolkit'



// createReducer me do object aayegen
// let counterReducer = createReducer({},{})

let initialState  = {
    c:0
}

export const customReducer = createReducer(initialState,{
    // eske ander hamm multiple reducer de sakte hai
    // this is the action that will be called when the action is dispatched.

    increment : (state) =>{  // yha action na hi likho
        // state.c = state.c +1
           state.c += 1;
    },

    incrementByValue : (state,action)=>{ // user se value le rha ki kitne se badhana hai toh "action" use karegen
        // state.c += 1;
        state.c += action.payload
    },
    
    decrement : (state) =>{ 
        state.c -= 1;
    },
})

```

### App.js
```js

import './App.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
         <Home/>
      </Provider>
    </>
  );
}

export default App;

```

### Home.jsx
```js

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

```
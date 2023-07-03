## Routing in react
###### step-1
```js

npm i react-router-dom@5.3.1

import {BrowserRouter,Switch,Route} from 'react-router-dom'

import {Link} from 'react-router-dom'

```
```js
<BrowserRouter>
    <Nav />

    <Switch>
    
    <Route path={'/'}>
       <Home></Home>
    </Route>

    <Route path={'/about'}>
       <About></About>
    </Route>
    </Switch>
       
</BrowserRouter>




      
// import {Link} from 'react-router-dom'     

<div>
   <Link to={'/'} ><h3>home comp</h3></Link>
   <Link to={'/about'}><h3>about comp</h3></Link>

</div>


```

```js

Switch 
========
- switch likhane se sare route match kiye jayegen , jo URL ko match karega wo print ho jayega

- sare route se koi ek ko chalayega jo pahle match ho jaye

- agar switch nahi likhate hai toh jo URL ko match karega wo print toh hoga hi aur jiss route ka path nahi diye hai , wo bhi print ho jayega

eg.
<Route>
   <PageNotFound></PageNotFound>
</Route>


eg.
<>

<Route Path={'/about'}>
    <About></About>
</Route>

<Route>
   <PageNotFound></PageNotFound>
</Route>

</>


- agar switch likhate hai toh URL match kiaa , agar koi URL match nhi kiaa toh, jiska "path" nhi diaa gya , route prr usse print karr dega 
eg.    PageNotFound


```
- eg.
```js
<>

<Switch>

    <Route Path={'/about'}>
        <About></About>
    </Route>

    <Route>
    <PageNotFound></PageNotFound>
    </Route>

</Switch>

</>



Output:     
=======
  localhost:3000/about    
  
  About component

  
```

###### App.js
```js
import './App.css';
import Nav from './components/Nav'
import About from './components/About';
import Home from './components/Home'
// npm i react-router-dom@5.3.1
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

          <Switch>
          <Route path={'/'}>
            <Home></Home>
          </Route>

          <Route path={'/about'}>
            <About></About>
          </Route>
         </Switch>
       
      </BrowserRouter>
    </>
  );
}

export default App;

```
###### Nav.js
```js
import React from 'react'
import './CSS/Nav.css'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <>
      <div className='nav-style'>
          <Link to={'/'} ><h3 className='home-link'>home comp</h3></Link>
          <Link to={'/about'}><h3 className='home-link'>about comp</h3></Link>

      </div>
    </>
  )
}

export default Nav

```
###### Home.js
```js
import React from 'react'

function Home() {
  return (
    <>
     <h1>Home comp</h1>
    </>
  )
}

export default Home

```
###### About.js
```js
import React from 'react'

function About() {
  return (
    <>
      <h1>about comp</h1>
    </>
  )
}

export default About

```


###### step-2

```js
// esse current version download hoga
npm i react-router-dom

import {BrowserRouter ,Routes ,Route} from 'react-router-dom'

import {Link} from 'react-router-dom'
```
```js
<BrowserRouter>
    <Nav />

    <Routes>
    
        <Route path={'/'}  element={<> <Banner/> <MoviesList/> </>} />


        <Route path={'/about'}  element={ <Favourites/> } />

    </Routes>
       
</BrowserRouter>




// import {Link} from 'react-router-dom'

<div>
   <Link to={'/'} style={{}} ><h3>Movie App</h3></Link>
   <Link to={'/favourites'}><h3>Favourites Comp</h3></Link>

</div>

```
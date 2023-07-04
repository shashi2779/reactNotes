## Routing in react - v6.14.1 
[link](https://www.youtube.com/watch?v=5r8U5uuhYqM&list=LL&index=3&t=258s)

```js
// esse current version download hota hai
npm i react-router-dom

// require kiye
import {createBrowserRouter,RouterProvider} from "react-router-dom";

// call kiye
const Router = createBrowserRouter([])


// call kiye
//eske ander array hote hai , array ke ander objects , 
// jitne bhi "Routes" hote hai obj ke form me rhte hai
// eske ander path ,element , children(routes of routes) hote hai.
const Router = createBrowserRouter([
    {path:"/" , element:<Home/>}
])



Note : 
      esko App.js ke ander "return" me render karte the , abb wha render nhi karegen , esko handle hmm createBrowserRouter se krr le rhe.
       
       App.js
       ========
            return(
                <>
                <Home/>
                </>
            )






jo hamne "routes" create kiye "createBrowserRouter" ke ander toh abb use provide karna hai apne application ko toh  "RouterProvider" use karegen
<RouterProvider router={Router}/>


App.js
========
return(
     <>
      <RouterProvider router={Router}/>
     </>                
)




Note:
1=>   const Router = createBrowserRouter([
            {path:"/", element:<Home/>},
            {path:"/about", element:<About/>},
            {path:"/favroutes", element:<Favourites/>}
      ])



        App.js
        ========
        return(
            <>
            <RouterProvider router={Router}/>
            </>               🟫      
        )                     🔻
                              ye jo property/attribute hai eska nam yehi exact hona chahiye 




2=>      const Router = createBrowserRouter([
            {path:"/", element:<Home/>},
            {path:"/about", element:<About/>},
            {path:"/favroutes", element:<Favourites/>}
         ])




          App.js
        ========
        return(
            <>
            <RouterProvider router={value}/>
            </>                      🔻
        )                             yha createBrowserRouter jis variable me save karegen uska nam hoga



```


## page not found
```js

## ye error aaye toh , ek component banayegen ErrorComponent ka use show kra degen
=======================================================================================
Unexpected Application Error!
404 Not Found
💿 Hey developer 👋

You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.

                        🟫
                        🔻

"ErrorComponent.js" nam se component banaye jo page found nhi hoga uske liye ye "pege" dikha de


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






App.js
========
import ErrorComponent from './components/ErrorComponent';


// home page me hi pass krr diye 
// errorElement me ErrorComponent component pass karr degen
const Router = createBrowserRouter([
   {path:"/", element:<Home/>, errorElement: <ErrorComponent/>},
   {path:"/about", element:<About/>},
   {path:"/favroutes", element:<Favourites/>}
])



```

### what is difference between Link vs Anchor tag (<a></a>)
```js

Anchor tag (<a></a>) use karne se, page change karne prr "refresh" hota hai

but Link use karne se page change karne prr "refresh" nhi hota hai.

```


## Nav
```js
import React from 'react'
import './CSS/Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
     <>
      <div className='nav-style'>
          <ul>
            // home component me "nav component" ko render krr rkhe hai
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/favroutes"}>Favourites</Link></li>
          </ul>
      </div>
     </>
  )
}

export default Nav





Note :
       "home component" me "nav component" ko render krr rkha hai , jisse problem ye ho rhi hai ki 
       agar mai nav me "About" or "Favourites" prr touch krr rha toh "About" or "Favourites" component ke sare chij dikha rha prr "Nav" component gayab ho ja rha
        prr hme "Nav" component chahiye jisse hmm dusare component me ja sake ,
        home prr ja kar dusare component me na jana pade
       
       
       esko solve kiye :=>
       ================
        
        eske liye hmm "child" route set karegen "App.js" component me 
        aur import karegen Nav component ko "App.js" component me , home component se hta degen nav component ko.


         App.js
         ----------
         => children prop pass kiaa aur , aur ye array hoga , 
            aur Nav component ko "parent" me krr degen.
            aur jitne "pages/component" hai sab "chilren" prop ke ander hogen , 
            
         => hmm log child route ko direct use nhi krr sakte , uske liye ek component ko import krna padta hai "Outlet" from react-rouer-dom.
         ye "Outlet" kha use hoga "Nav" component me , means outlet bar-2 replace hoga
         agar home prr click krr rhe toh "Home" component se replace ho jayega,
         agar about prr click krr rhe toh "About" component se replace ho jayega    
         
         => "Outlet" ek dynamic component hai jo bar-2 replace hota rhega. 
             child rout ke according(home,about,favourites)
         
         
        
        const Router = createBrowserRouter([
            {path:"/", element:<Nav/>, errorElement: <ErrorComponent/>, children:[
                {path:"/", element:<Home/>},
                {path:"/about", element:<About/>},
                {path:"/favroutes", element:<Favourites/>}
            ]},
   
         ]) 





      Nav.js
      ------------
        
         => hmm log child route ko direct use nhi krr sakte , uske liye ek component ko import krna padta hai "Outlet" from react-rouer-dom.
         ye "Outlet" kha use hoga "Nav" component me , means outlet bar-2 replace hoga
         agar home prr click krr rhe toh "Home" component se replace ho jayega,
         agar about prr click krr rhe toh "About" component se replace ho jayega    
         
         => "Outlet" ek dynamic component hai jo bar-2 replace hota rhega. 
             child rout ke according(home,about,favourites)

         => sabse niche use karegen

                import React from 'react'
                import './CSS/Nav.css'
                import { Link } from 'react-router-dom'
                import { Outlet } from 'react-router-dom'

                function Nav() {
                return (
                    <>
                    <div className='nav-style'>
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                            <li><Link to={"/favroutes"}>Favourites</Link></li>
                        </ul>
                    </div>
                    <Outlet/>
                    </>
                )
                }

                export default Nav


```



## Important
- App.js
- Nav.js
- ErrorComponent.js
```js
"Link" ke jagah "navlink" use karte hai jab hme nav ke kisi link prr ja ke click kare 
 toh pta chale ki kiss ko touch kee rhe (home,about,favourites)

video watch : 28:30 mi se 
```

##### App.js
```js

import './App.css';
import Favourites from './components/Favourites';
import Home from './components/Home';
import Nav from './components/Nav'
import About from './components/About'
import ErrorComponent from './components/ErrorComponent';

// npm i react-router-dom
import {createBrowserRouter,RouterProvider} from "react-router-dom";


// call kiye
//eske ander array hote hai , array ke ander objects , 
// jitne bhi "Routes" hote hai obj ke form me rhte hai
// eske ander path ,element , children(routes of routes) hote hai.
const Router = createBrowserRouter([
   {path:"/", element:<Nav/>, errorElement: <ErrorComponent/>, children:[
    {path:"/", element:<Home/>},
    {path:"/about", element:<About/>},
    {path:"/favroutes", element:<Favourites/>}
   ]},
   
])



function App() {
  // jo hamne "routes" create kiye "createBrowserRouter" ke ander toh abb use provide karna hai apne application ko toh  "RouterProvider" use karegen
  return (
     <>
        <RouterProvider router={Router}/>
     </>
  );
}

export default App;

```

##### Nav.js
```js

import React from 'react'
import './CSS/Nav.css'
import { Link } from 'react-router-dom'
//dynamic components
import { Outlet } from 'react-router-dom'

function Nav() {
  return (
     <>
      <div className='nav-style'>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/favroutes"}>Favourites</Link></li>
          </ul>
      </div>
      <Outlet/>
     </>
  )
}

export default Nav

```
##### ErrorComponent
```js

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

```


##### Home.js
```js

import React from 'react'
import Nav from './Nav'
function Home() {
  return (
    <div>
      <h1>home</h1>
    </div>
  )
}

export default Home

```
##### About.js
```js

import React from 'react'

function About() {
  return (
    <div>
      <h1>About</h1>

    </div>
  )
}

export default About

```

##### Favourites.js
```js

import React from 'react'

function Favourites() {
  return (
    <div>
      <h1>Favourites</h1>
    </div>
  )
}

export default Favourites

```
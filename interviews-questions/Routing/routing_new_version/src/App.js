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

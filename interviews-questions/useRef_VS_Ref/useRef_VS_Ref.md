## useRef 
[link-1](https://www.youtube.com/watch?v=86EkZzXyScQ&t=45s)
[link-2](https://www.youtube.com/watch?v=nX9ShZo0COc)
- it is Hook, aur ese "functional component" me hi use karte hai
- Focus ,color , value, style ect handle with useRef.
- DOM manipulate karne ke liye useRef ka use karte hai.
- directly DOM ko manipulate karne ke liye useRef ka use karte hai.
- bahot bar aisa hota hai hamara state,props se directly kam nhi chalta , hme html ke ander direct modification karne hote hai i.e kabhi kisi ka color , Focus handle karna pad sakta hai toh hmm use sarte hai "useRef" in functional components.
- state k thr. bhi kar sakte hai par har jagah state use karna possible nhi hota 
- this is import from react
- DOM ko handle karne ke liye functional component me "useRef" use karte hai.

```js

import {useRef} from 'react';


function App{
    let inputVal = useRef(null)

    function handleInput(){
        inputVal.current.value ="1000";
        // inputVal.current.focus();
        // inputVal.current.style.color = "red";
    }
    return(
        <>
          <h1>useRef in React</h1>
          <input type='text' ref={inputVal}/>
          <button onClick={handleInput}>Handle Input</button>
        </>
    )
}

```


## Ref
- ese "class component" me use karte hai
- react js bolta hai aap log directly DOM ko manipulate mat karo, kyun ki directly DOM manipilate karne se react slow ho jati hai. toh State,props use karte hai.
- react js bolta hai directly DOM ko manipulate nhi karne ko , but "Ref" directly DOM ko manipulate karr deta hai toh ess liye "Ref" ko emergency or eski bahot jarurat ho eske bina kam nhi chal sakta tab hi use karte hai. 
- Ref directly DOM ko manipulate karta hai , in class components.
- eg. validation, color change k liye , focus dena ,value dena ho tab ect

```js

import React,{createRef} from 'react;


class App extends React.Component{
    
    constructor(){
        super();
        this.inputVal = createRef();
    }


     getVal(){
         this.inputVal.current.value = "1000"
         this.inputVal.current.style.color = "red"  // input ke ander jo hai red me dikhayega
     }

    render(){
         return(
            <>
            <h1>Ref in React</h1>
            <input type='text' ref={this.inputVal}/>
            <button onClick={()=>this.getVal}>click here</button>
            </>
         )
    }
}

```
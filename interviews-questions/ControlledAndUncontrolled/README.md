### Controlled and UnControlled component :
------------------------------------------------

#### Controlled Component :

```js
# App.js :
====================

import Form from './Form';

function App(){
    return(
        <Form/>
    )
}

export default App;


# Form.js :
====================

import React,{useState} from 'react


function Form(){

    const [name,setName] = useState('')
   
   const handleClick = () =>{
        console.log(name)
    }


    return(
         <>
          <lable>Name: </lable>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          <button onClick={handleClick}>submit</button>
         </>
    )
}

export default Form
```


#### UnControlled Component :
---------------------------------

```js
# App.js :
====================

import Form1 from './Form1';

function App(){
    return(
        <Form1/>
    )
}

export default App;


# Form.js :
====================

import React,{useState} from 'react


function Form1(){

   // value di uncontrolled comp me
   const inputVal = React.createRef()
   
   
   const handleClick = () =>{
       // console.log(inputVal)
       console.log(inputVal.current.value);
    }


    return(
         <>
          <lable>Name: </lable>
          <input type="text" ref={inputVal}}/>
           <button onClick={handleClick}>submit</button>
         </>
    )
}

export default Form1
```

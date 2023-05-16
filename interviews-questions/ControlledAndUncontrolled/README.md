### Controlled and UnControlled component :
------------------------------------------------

#### Controlled Component :


- state update huyi wo apne UI ko di , 
- kisi bhi component ko validated kar sakta hu that is called controlled component. 
- control Component par validation lga sakta hu , ki name ka jo length hai
  grater than 3 hoga tab hi "submit" kar sakta hu , nameLength 3 se kam ho toh
  submit ko disable kar do

  i.e  strong password set karne k bad hi next page prr ja sakte hai.

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
![](img/comp2.png)

![](img/comp1.png)
     
     


#### UnControlled Component :
---------------------------------
- yha validation nahi lga sakte bcz yha par hamne koi track nhi rakha ,
  input me koi value store nhi karayi with onClick ,
  hamne direct refrance store kra


- diadvantage :
  i.e mana input me "name" ki length grater than 3 ho toh hi submit ho ,
  par yha nhi kar sakte bcz mai value ko track nhi kar rha 

- advantage :
   hamne apni memory bachayi bcz hamne "state" me value store nhi kra rhe ,
   hamne yha par koi track nhi rakha

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
       // console.log(inputVal)  // esse HTML ka tag pura ka pura aa jayega
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
![](img/comp3.png)
![](img/comp4.png)


# Note :

Controlled Component  
---------------------- 
- *yha variable me strore karate hai apni value  
   
   const [name,setName] = useState('') 

- yha onChange ka event lga rhe 
  yha value ko update karte hai

- *yha input par validation 

- *conditionally disability submit
   i.e strong password set karne k bad aap next page par ja sakte hai

-  *yha track rakhate hai
-  *onSubmit validation yha kar sakte hai 


UnControlled Component 
------------------------
- *yha ham ref create karate hai 
   const 
   
   inputVal = React.createRef()

- yha koi event nhi lagate 
  yha value update ka kam nhi karte 

- *yha input ka validation nhi karte  = ✖
- *conditionally disability submit = ✖
- *yha track nhi rakhate
- *onSubmit validation yha bhi kar sakte hai 


![](img/comp5.png)



### Custom Hooks :
- a Custom Hook is a javaScript funtion whose name starts with "use" keyword.
    - custom hook js fun hai , uska nam "use" keyword se start hota hai.
- we can use other hooks in custom hooks as well.
     -  apne custom hook ke ander built in hooks ka bhi use kar sakte hai.
         -  eg. "useXYZ" nam se koi hook banaya hai , toh mai uske ander useState , useEffect enn sare Hooks ko bhi easily define kar sakte hai.

### why to use Custom Hook ?
- to remove the duplicated logic in components and we can exract(nikalna) that logic to custom hook.
  - hamare pas do ya do se jada components ese ho jate hain , jisme ham similar kind of logic likhate hai & it is not good to practice write.

    [similar kind of code again and again]

    toh yha custom use karte hai.
    
    aap higher order components bhi use kar sakte hai. 

  - custom hook just like javascript function ki tarah hote hai. eg . ham js function ko ek nahi bar-2 call kar sakte hai , lekin define sirf ek hi bar karna hota hai , esi tarah se hamara custom hook me apna share logic likh sakte hai. aur jis bhi component me hame uss logic ki jarurat hai , ham apne custom hook ko call kar sakte hai.


##
- App.js 
```js
import './App.css';
import Count_1 from './components/Count_1';
import Count_2 from './components/Count_2';

function App() {
  return (
    <>
     <Count_1/>
     <Count_2/>
    </>
  );
}

export default App;

```

- useCounter.js <= custom hook
```js
import {useState} from 'react'

function useCounter(initialValue = 0) {
    const [count,setCount] = useState(initialValue)

    function Increment(){
        setCount(count+1)
    }

    function Decrement(){
        setCount(count-1)
    }

    return [count,Increment,Decrement]
  
}

export default useCounter

```
- count_1.js
```js
import React, { useState } from 'react'
import useCounter from './useCounter'


function Count_1() {
  const [count, Increment, Decrement] = useCounter(10)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </>
  )
}

export default Count_1

```
- count_2.js
```js
import React from 'react'
import useCounter from './useCounter'

function Count_2() {
  const [count, Increment, Decrement] = useCounter()
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </>
  )
}

export default Count_2

```
##### output :
```js
//   10
// [+][-]


//    0
// [+][-]



note :
       esko increment and decrement krr sakte hai 
```
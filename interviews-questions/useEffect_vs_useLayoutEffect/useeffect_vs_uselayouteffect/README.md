### useEffect vs useLayoutEffect :
![](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)
#### useEffect :
- run after render
- it runs synchronously after DOM is painted.
    - DOM painted means UI lad gya aapke browser prr (phir useEffect chalta hai)
    - render chala usse UI bna aur lad gya phir ye useEffect chalega (render --> DOM painted --> useEffect)
- refresh karne per pahle "Loading...." dikhaya phir "Done" dikhaya
```js
App.js
============
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [text,setText] = useState("Loading................................")

  useEffect(()=>{
    setText('Done')
  })
  return (
   <>
   <h1>{text}</h1>
   </>
  );
}

export default App;

``` 

#### useLayoutEffect :
- run after render
- it runs before changes are painted.
    - changes k paint hone se pahle chal rha
- refresh karne per "Loading...." wali chij nhi dikhayega , "Done" dikhaya only
```js
App.js
=============

import { useState,useEffect, useLayoutEffect } from 'react';
import './App.css';

function App() {
  const [text,setText] = useState("Loading................................")

  // useEffect(()=>{
  //   setText('Done')
  // })

  useLayoutEffect(()=>{
    setText('Done')
  })

  return (
   <>
   <h1>{text}</h1>
   </>
  );
}

export default App;

```
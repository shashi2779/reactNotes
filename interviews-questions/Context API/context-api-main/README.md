## Context API 
##### [ context API jada component prr use kiye dekhna hai toh "Food_App" ka project check krr le ]
### Context API :
- parent -> App.js , 
- child -> ChildA , ChildB , ChildC
- parent [App.js] se child [ChildC] me data bhejna hai.
- ----
- import : 
   - import React,{createContext} from 'react';
- call kiye :
   - const context = createContext()
   - createContext() --> me default "data" bhi de sakte hai
- jaha-2 use karna chahate ho "wrapper" bana lo :
   - mai chahta hu pure k pure "app.js" me jitne "component" hai , har jagah "data" ko transfer kar paye
     ```js
      <context.Provider value={color}>
        <>
          <h1>app comp</h1>
          <Child />
        </>
      </context.Provider>  
     ```
    - eg :
     ```js
        App.js
        -----------

            import './App.css';
            import Child from './components/Child';
            import React, { createContext ,useState } from 'react';
            const context = createContext()

            function App() {
            const [color,setColor] = useState('yellow')
            return (
                <context.Provider value={color}>
                <>
                    <h1>app comp</h1>
                    <Child />
                </>
                </context.Provider>
            );
            }

            export default App;


     ```

#### App.js
```js
import './App.css';
import Child from './components/Child';
import React, { createContext ,useState } from 'react';
// export kiye global state "context" ko
export const context = createContext()

function App() {
  const [color,setColor] = useState('yellow')
  return (
    <context.Provider value={color}>
      <>
        <h1>app comp</h1>
        <Child />
      </>
    </context.Provider>
  );
}

export default App;

```
#### Child.js
- "App.js" se data hmne bheja , toh hmm uss data ko "Child" me kaise access karegen
  - jab bhi aap child component me jaoge aap ko import karna hai Hook --> uss hook ka nam hai "useContext" 
  - Import :
     -  import React, { useContext } from 'react' 
  - "useContext" aapke "component" k ander hi use hoga 
  - useContext --> ke through hmm "global store" se "value" mangate hai
```js
import React, { useContext } from 'react'
import { context } from '../App'

function Child() {
    // useContext me "global state --> context" pass kiye 
    const appColor = useContext(context)
    return (
        <>
            <h1 style={{ color: appColor }}>child components</h1>
        </>
    )
}

export default Child

```
## Context API :
- parent -> App.js , 
- child -> ChildA , ChildB , ChildC
- parent [App.js] se child [ChildC] me data bhejna hai.
------

## Context API Flow 
- create -> provider -> consumer (useContext)
- create : 
   - const data1 = createContext()
- provider :    [ App.js ]
```js
     const data1 = createContext()


     const name = "shashikant yadav"
     const vill = "bihar"


      <data.Provider value={name}>
        <data1.Provider value={vill}>
          <ChildA />
        </data1.Provider>
      </data.Provider>

```
- useContext 
```js
import React, { useContext } from 'react'
//import createContext in data,data1
import {data,data1} from '../App.js'

function ChildC() {
    const firstName = useContext(data)
    const vill = useContext(data1)

  return (
    <>
    <h1>hello, my Name is {firstName} and i am from {vill}</h1>
    </>
  )
}

export default ChildC
```
-----
- create : 
  - create context  
- provider : 
  - data provide in our components 
- useContext : 
   - component me "global store" se value nikalna with useContext.
------- 
- sabse pahle hme  context create karna hota hai then 
- Provider data provide karta hai then 
  - ess application me App.js "data" provide krr rha 
- abb hamare pas consumer hai 
  - abb data consume krr rha c Components
- create -> provider -> consumer (useContext)
- create -> provider -> useContext
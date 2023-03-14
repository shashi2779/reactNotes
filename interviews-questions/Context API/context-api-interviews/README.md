## Context API :
- create -> provider -> consumer (useContext)
- create ( ChildA ) -> provider ( App.js ) -> useContext ( consumer -> ChildC )
------ 
- parent -> App.js , 
- child -> ChildA , ChildB , ChildC
- parent [App.js] se child [ChildC] me data bhejna hai.
-----------
- create : 
  - create context : child -> ChildA , ChildB , ChildC 
- provider : 
  - data provide in our components 
- useContext : 
   - component me "global store" se value nikalna with useContext.

## Context API Flow 
- sabse pahle hme  context create karna hota hai then 
- Provider data provide karta hai then 
  - ess application me App.js "data" provide krr rha 
- abb hamare pas consumer hai 
  - abb data consume krr rha c Components
- create -> provider -> consumer (useContext)
- create -> provider -> useContext
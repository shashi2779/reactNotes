## Context API :
- create -> provider -> consumer (useContext)
- create ( ChildA ) -> provider (App.js) -> useContext ( consumer -> ChildC )
-----------
- create : 
  - create context
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
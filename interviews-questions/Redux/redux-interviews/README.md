### Redux
-----------------
- Redux is a library for JS application.
- you can use Redux with React, Angular,
  Vue
- Redux is a state container
- Redux : as a dukan
   
   - esme hme kaun se "item" milegen : ...matlab state
- 
### Core concept of Redux
-----------------------------
- Store
- Action
- Reducer



#### Action :
------------------
- Action are JS Object.... that contain information.
- obj k ander "type" nam ki property hoti hai. ye property hamesa "string value" contain karegi. 
- hme batate hai hame kya karna hai state k sath.
- kya change hona hai.
  
      const Action = {
 
        type:" "

      }

#### Reducer :
-----------------
- hamara state jo hai , usse update karta hai "Action" k kahne par.
- kaise change hona hai
- Reducer are the function that accepts state & action as parameters & return the next state of the application.
     
     - reducer as a parameter "state" & "action" leta hai.
  
     
      (previouState,action) => new state


#### Store :
--------------
- Entire application contains Single STORE
- state ko store kar k rakhata hai.
  - holding application state
- Inbuilt method of store :
     
     - getState( ) :
       
        - jo "state" hamare "store" me hold kar ke rakha hai, usko access kar sakte hai, with the help of getState() method
    
    - dispatch(action) :
        
        - jo ki hame allow karti hai ki hamm apne state ko update kar sakte hai.
    
    - subscribe(listner) :
           
      -  subscribe() method ke through hamm apne jo listners hote hai unko register kar sakte hai.


### Note :
----------
- hame apni "react ke Application" ko finally "redux" ke sath connect karna hai...
  toh App.js me :

      import { Provider } from 'react-redux';

      
      react-redux library hme "Provider" provide karta 
      
- ess provider ke through hamm apni "Application" ko "redux" ke sath connect kar sakte hai.  

        <Provider>   

        </Provider> 

- ess Provider ko pata hi nahi hamara "state" kaha hai ,koi information nahi hai toh, 
  "store" me "state" hai [information ke liye hame store ko import karna padega] , toh store ko import kiya App.js me , store ko as a props pass kar degen Provider ko.


          import store from './reduxContainer/Store';


          <Provider store={store}>   

          </Provider> 



 
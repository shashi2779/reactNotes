![CHEESE!](imgg/React_Revision.jpg)


![reactjs-interview-questions](https://github.com/sudheerj/reactjs-interview-questions)


# react-interviews-question :

### Lifecycle method in react :

- Three phases : (In class)

     - mounting(creation)   : 
       - aapka component aapke Dom par add huaa
           
              constructor() => render => componentDidMount
     - updating(updation)  :  
        - state change/update huyi toh component update huaa
             
              render => componentDidUpdate  
     - unmounting(delete) : 
        - Dom se nikal rhe
        - jab component hat rha hoga hamari Dom se toh uss se just pahle hi ye method call ho jayega.

               componentWillUnMount 

![CHEESE!](imgg/life-1.png)

![CHEESE!](imgg/life-2.png)


##### In functional component :

   - lifecycle wala kam function component me "Hook" k aane se "useEffect()" se solve karte h
   - side effect wale kam jisame hme wait karna pad sakta hai, wo kam hmm 
     functional component m "useEffect()" se handle karte hai. 

        - useEffect(fun) :
           
           - execute always after first render
        
        - useEffect(fun , [ ]) :
             
             - execute only once
        
        - useEffect(fun , [...parameter...]) :
            
             - unn parameters k , conditionally after first render

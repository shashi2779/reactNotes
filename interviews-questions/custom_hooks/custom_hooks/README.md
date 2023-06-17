### Custom Hooks :
- a Custom Hook is a javaScript funtion whose name starts with "use" keyword.
    - custom hook js fun hai , useka nam "use" keyword se start hota hai.
- we can use other hooks in custom hooks as well.
     -  apne custom hook ke ander built in hooks ka bhi use kar sakte hai.
         -  eg. useXYZ nam se koi hook banaya hai , toh mai uske ander useState , useEffect enn sare Hooks ko bhi easily define kar sakte hai.

### why to use Custom Hook ?
- to remove the duplicated logic in components and we can exract that logic to custom hook.
  - hamare pas do ya do se jada components ese ho jate hain , jisme ham similar kind of logic likhate hai & it is not good to practice write.

    [similar kind of code again and again]

    toh yha custom use karte hai.
    
    aap higher order components bhi use kar sakte hai. 

  - custom hook just like javascript function ki tarah hote hai. eg . ham js function ko ek nahi bar-2 cakk kar sakte hai , lekin define sirf ek hi bar karna hota hai , esi tarah se hamara custom hook me apna share logic likh sakte hai. aur jis bhi component me hame uss logic ki jarurat hai , ham apne custom hook ko call kar sakte hai.
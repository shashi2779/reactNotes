### Custom Hooks :
- a Custom Hook is a javaScript funtion whose name starts with "use" keyword.
- we can use other hooks in custom hooks as well.
     -  apne custom hook ke ander built in hooks ka bhi use kar sakte hai.
         -  eg. useXYZ nam se koi hook banaya hai , toh mai uske ander useState , useEffect enn sare Hooks ko bhi easily define kar sakte hai.

### why to use Custom Hook ?
- to remove the duplicated logic in components and we can exract that logic to custom hook.
  - hamare pas do ya do se jada components ese ho jate hain , jisme ham similar kind of logic likhate hai & it is not good to practice write.

    [similar kind of code again and again]
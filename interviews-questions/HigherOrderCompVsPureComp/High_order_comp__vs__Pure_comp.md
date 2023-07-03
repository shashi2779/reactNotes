## Difference b/w pure component vs higher order component 
#### pure component :
- ye class component me use hote hai
- stateless hote hai
- esliye enko props ke through "data" bhejte hai , aur unke base par render karte hai
- aapke component ke re-rendering ko rokta hai  [class comp me re-rendering ko rokta hai] 
    - bda comp rahega toh re-rendering hone me time lagega
    - eg. counter wala fun

```js

class Foo extends React.Component{
   render(){
     console.log("check re-render");
     return(
      <>
        <h1>Foo component</h1>
      </h1>
     )
   }
}


// react pure class components
class Bar extends React.PureComponent{
  render(){
    console.log("check re-render");
    return(
      <>
        <h1>Foo pure component</h1>
      </h1>
    )
  }
}

```

```js

class App extends React.Component{
  
  constructor(){
    super();
    
    this.State={
       count:0
    }
  }

  render(){
    return(
      <>
        <User count={this.state.count} />
        <button onClick={()=> this.setState(count:this.state.count+1)}>click here</button>
      </User>
    )
  }
}



class User extends React.PureComponent{

  render(){
    return(
      <>
        <h1>user component,{this.props.count}</h1>
      </h1>
    )
  }
}

```

#### higher order component :
- state hoti hai
- ek component jo dusare components ko as a props leta hai , 
 
  aur ek alag components return karta hai.

- HOC is a component which recieve a component & return a component  
- eg. counter wala fun 

```js

function Counter(){
  const [count,setCount] = useState(0);
  
  return(
    <>
      <h3>{count}</h3>
      <button onClick={setCount(count+1)}>update</button>
    </>
  )
}



function App(){
  return(
    <>
     <HOC cmp={<Counter/>}/>
    </>
  )
}


// as a props "Counter comp" liya 
function HOC(props){
  return(
    <>
      <h2 style={{color:'red'}}>{props.cmp}</h2>
    </>
  )
}


Note:
     - bahot se "Counter" comp chahiye jiska style ,color alag-2 ho , 
       ya kuch extra chije added ho. tab Higher Order Componets use karte hai.

```
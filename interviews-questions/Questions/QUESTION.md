## How is React different from Angular?
#### React :
- Author => Facebook
- Architecture => View layer of MVC
- DOM => Virtual DOM
- Data-Binding => Uni-directional
- Rendering => Server-Side
- Performance => Faster due to Virtual DOM

#### Angular :
- Author => Google
- Architecture => Complete MVC
- DOM => Real DOM
- Data-Binding => Bi-directional
- Rendering => Client-Side
- Performance => Comparatively slow

## What is an event in React?
##### An event is an "action" that a user or system may "trigger", such as "pressing a key", a "mouse click", etc
- React events are named using "camelCase", rather than lowercase in HTML. eg. onPress,onClick
```js
 <Button onPress={lightItUp} />
```

###### How do you create an event in React?
![](https://www.simplilearn.com/ice9/free_resources_article_thumb/question-9.JPG)

##  Explain how lists work in React
-


## How do you write comments in React?
###### Single-line comments
![](https://www.simplilearn.com/ice9/free_resources_article_thumb/return.JPG)

###### Multi-line comments
![](https://www.simplilearn.com/ice9/free_resources_article_thumb/multi-line.JPG)

## What is React Router?
- 

## What is the difference between state and props ?
- 
## Lists in react
- Lists in react are same as the lists in JS/HTML
- we can use lists to show multiple items in a structured manner
- we can use lists for displaying menu,navigation bar etc.
- To traverse a list , we can use map method of an array.
```js
Basic HTML/JS List
=========================
<ul>
<li>item 1</li>
<li>item 1</li>
<li>item 1</li>
</ul>



React List
============
const items = [1,2,3,4,5];
const listItems = items.map((item) =>
          <li>{item}</li>
           
)

return <ul>{listItems}</ul>

``` 
## What are "keys" in React ?
- Keys help -> react identify , which elements were added, changed or removed.
- Keys should be given to "array elements" for providing a "unique identity" for each element.
- Without keys => React does not understand the "order" or "uniqueness" of each element.
- With keys => React has an idea of -> which particular element was deleted, edited, and added.
- Keys are generally used for "displaying a list of data" coming from an API.
```js
key identify karta hai aur react ko batata hai list me kya chij new add huyi hai... ya kya remove hua hai.... 
ya kya chij hme change karna hai...


const ids = [1,2,3,4,5];

const listElements = ids.map((id)=>{
return(
<li key={id.toString()}>
  {id}
</li>
)
})

```
![](https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/002/336/original/What_are_keys_in_React.png?1640091613)

#### why use user_id with "key" & why not prefer indexes with key in react
- the index of item might not always be the same they might change if start removing item from the array then those indexes for each element are going to be different so they are not stable identifiers of element just a shapshot of the current position in the array so always try to use a permanent identifier such as an id property instead of the index otherwise you could run into unexpected error & performances issue.
```js
function Home(){
   const [person,setPerson] = useState(["mahesh","suresh","satedra"]);
  return(
    <>
      <div>
       {
        people.map((person,index)=>{
             return <div key={index}>
                    {person.name}
             </div>
        })
       }
      </div>
    </>
  )
}
```

## Rules of Hooks :
- not allowed to call nested function , loop , conditions
- call only functional components

## diff't way to style a React components ? 
- inline styling
- using js obj
- CSS Stylesheet
- CSS Module

## Types of Hooks :
![](https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/002/331/original/types_of_Hooks_in_React.png?1640091273)

## How to pass data b/w sibling components. using React router 
- Passing data between sibling components of React is possible using React Router with the help of history.push and match.params.

### Difference b/w context API vs Redux :
#### Redux :
- open source library
- create & manage global store 
- Action & reducer are used to manipulated this store 
#### Context API :
- state management solution

## why should we not update the state directly ?
```js
* if you try to update the state directly then it was not re-render the components

this.state.message = "Hello world";


use setState() method to update the components , when state changes , the components responds by re-rendering

this.setState({message:'hello world'})

```
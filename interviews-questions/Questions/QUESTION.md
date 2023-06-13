## Why use React instead of other frameworks, like Angular?
-  Easy creation of dynamic
-  Improved performance
-  Reusable components
-  Unidirectional data flow
-  Dedicated tools for easy debugging

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
##### An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc
- React events are named using camelCase, rather than lowercase in HTML. eg. onPress,onClick
- <Button onPress={lightItUp} />

## How do you create an event in React?
![](https://www.simplilearn.com/ice9/free_resources_article_thumb/question-9.JPG)

##  Explain how lists work in React
- We create lists in React as we do in regular JavaScript. Lists display data in an ordered format
- The traversal of lists is done using the map() function
![](https://www.simplilearn.com/ice9/free_resources_article_thumb/const.JPG)


## How do you write comments in React?
- Single-line comments
![](https://www.simplilearn.com/ice9/free_resources_article_thumb/return.JPG)

- Multi-line comments
![](https://www.simplilearn.com/ice9/free_resources_article_thumb/multi-line.JPG)

## What is a higher-order component in React?
- HOC is a component which recieve a component & return a component
- ek component jo desare components ko as a props leta hai aur ek alag components return karta hai.

## What is React Router?
- React Router is a routing library built on top of React, which is used to create routes in a React application. This is one of the most frequently asked react interview questions.

## What is the difference between state and props ?
- In React, both state and props are plain JavaScript objects and used to manage the data of a component, but they are used in different ways and have different characteristics. state is managed by the component itself and can be updated using the setState() function. Unlike props, state can be modified by the component and is used to manage the internal state of the component. Changes in the state trigger a re-render of the component and its children. props (short for "properties") are passed to a component by its parent component and are read-only, meaning that they cannot be modified by the component itself. props can be used to configure the behavior of a component and to pass data between components.

## When do you need to use refs ?
##### There are few use cases to go for refs,
- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

## What are keys in React ?
##### A key is a special string attribute that needs to be included when using lists of elements.
![](https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/002/336/original/What_are_keys_in_React.png?1640091613)
```js
const ids = [1,2,3,4,5];
const listElements = ids.map((id)=>{
return(
<li key={id.toString()}>
  {id}
</li>
)
})
```
- Keys help react identify which elements were added, changed or removed.
- Keys should be given to array elements for providing a unique identity for each element.
- Without keys, React does not understand the order or uniqueness of each element.
- With keys, React has an idea of which particular element was deleted, edited, and added.
- Keys are generally used for displaying a list of data coming from an API.

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


## Difference b/w pure component vs higher order component 
#### pure component :
- ye class component me use hote hai
- stateless hote hai
- esliye enko props ke through "data" bhejte hai , aur unke base par render karte hai
- aapke component ke re-rendering ko rokta hai  [class comp me re-rendering ko rokta hai] 
    - bda comp rahega toh re-rendering hone me time lagega
    - eg. counter wala fun


#### higher order component :
- state hoti hai
- ek component jo dusare components ko as a props leta hai , 
 
  aur ek alag components return karta hai.

- HOC is a component which recieve a component & return a component  
- eg. counter wala fun 
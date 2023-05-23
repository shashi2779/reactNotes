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

## REST API  :  two of the most popular approaches
- Axios (a promise-based HTTP client) 
- Fetch API (a browser in-built web API)

### API :
- As you know we can not directly connect reactJS to database. so we need server side language & that language basically connect with the data base provide the data in json format & this json format data is API.
- free online API JSONPlaceholder <== search on google for json data(Fake REST API of JSON data for development)

```js
[
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
"userId": 1,
"id": 2,
"title": "qui est esse",
"body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
"userId": 1,
"id": 3,
"title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
"body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
}
]

```

### fetch() :
- which is the path or URL to the resource you want to fetch.
- Then it returns a Promise so you can handle success or failure using the then() and catch() methods.
- Link : https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/
```js
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
   .then(response => response.json())
   .then(data => console.log(data));

```
#### GET :
- request data from an endpoint. 

#### POST :
-  send data to an endpoint. 

#### DELETE :
-  remove data from an endpoint.


## How to Perform a GET Request in React With Fetch API :
- when using the GET method, which is the default. 
```js
fetch(url, {
    method: "GET" // default, so we can ignore (esko likho ya nahi koi fark nhi padta)
})

OR 

fetch(url)
fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`)

```
-  But for other methods such as POST and DELETE, you'll need to attach the method to the options array:

```js
const addPosts = async (title, body) => {  // ye do argument pas karna bhi jaruri hai ✅
await fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',   // ye likhna jaruri hai ✅
body: JSON.stringify({    // ✅
   title: title,
   body: body,
   userId: Math.random().toString(36).slice(2),
}),
headers: {
   'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((data) => {
   setPosts((posts) => [data, ...posts]);
   setTitle('');
   setBody('');
})
.catch((err) => {
   console.log(err.message);
});
};

```
- How to Perform a GET Request in React With Fetch API :
- eg : 
- How to Perform a GET Request in React With Fetch API
```js

import React, { useState, useEffect } from 'react';


function RestApi() {
    const [posts, setPosts] = useState([]);

    // GET with fetch API
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`)
            .then((response) => response.json())       // change string data to json format
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="posts-container">
            {posts.map((post) => {
                return (
                    <div className="post-card" key={post.id}>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-body">{post.body}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default RestApi

```
#### output :
```js
sunt aut facere repellat provident occaecati excepturi optio reprehenderit
quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto

qui est esse
est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla

ea molestias quasi exercitationem repellat qui ipsa sit aut
et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut

```

## How to Perform a POST Request in React With Fetch API :

- You can use the HTTP POST method to send data to an endpoint. 
- It works similarly to the GET request, 
- the main difference being that you need to add the method and two additional parameters to the optional object:

```js
const addPosts = async (title, body) => {
await fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: JSON.stringify({
   title: title,
   body: body,
   userId: Math.random().toString(36).slice(2),
}),
headers: {
   'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((data) => {
   setPosts((posts) => [data, ...posts]);
   setTitle('');
   setBody('');
})
.catch((err) => {
   console.log(err.message);
});
};

```
## REST API 
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
-  send data to an endpoint

#### DELETE :
-  remove data from an endpoint


## How to Perform a GET Request in React With Fetch API :
- when using the GET method, which is the default. 
-  But for other methods such as POST and DELETE, you'll need to attach the method to the options array:
```js
fetch(url, {
    method: "GET" // default, so we can ignore (esko likho ya nahi koi fark nhi padta)
})

```
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
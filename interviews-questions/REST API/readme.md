## REST API  :  two of the most popular approaches
- Axios (a promise-based HTTP client) 
- Fetch API (a browser in-built web API)

### API :
- As you know we can not directly connect reactJS to database. so we need server side language & that language basically connect with the data base provide the data in json format & this json format data is API.
- free online API JSONPlaceholder <== search on google for json data(Fake REST API of JSON data for development)
- API Link : https://jsonplaceholder.typicode.com/posts

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
- data ko "get" karne k liye

#### POST :
-  send data to an endpoint. 
-  data ko "store" karne k liye

#### PUT :
-  data ko "update" karne k liye
-  [bahot sara data ko send karna]

#### PATCH :
-  data ko "update" karne k liye
-  [ek particular chij hi send karna]

#### DELETE :
-  remove data from an endpoint. 
-  data ko "remove" karne k liye



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

## eg : 
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

#### GET Request in React With Fetch API => with async-await :
```js
  // GET with fetch API
   useEffect(() => {
      const fetchPost = async () => {
         const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=10'
         );
         const data = await response.json();
         console.log(data);
         setPosts(data);
      };
      fetchPost();
   }, []);
```


## How to Perform a POST Request in React With Fetch API :

- You can use the HTTP POST method to send data to an endpoint. 
- It works similarly to the GET request, 
- the main difference being that you need to add the method and two additional parameters to the optional object:
- method , body , headers

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
- Imp
```js
import React, { useState, useEffect } from 'react';

function PostData() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

 // GET with fetch API
 useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`)
      .then((response) => response.json())          // change string data to json format
      .then((data) => {
          console.log(data);
          setPosts(data);
      })
      .catch((err) => {
          console.log(err.message);
      });
}, []);


// Post with fetch API
  const addPosts = async (title, body) => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',  // content type json format me rhega
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPosts((posts) => [data, ...posts]);
        setTitle('');
        setBody('');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  const handleSubmit = (e) => {
    e.preventDefault(); // default behaviour change karta hai
    addPosts(title, body); // upar wale fun ko call kiya
  };


  return (
    <div className="app">
      
      <div className="add-post-container">
        <form onSubmit={handleSubmit}>
          {/*  user-Title  */}
          <input type="text" className="form-control" value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* user-body */}
          <textarea name="" className="form-control" id="" cols="10" rows="8"
            value={body} onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button type="submit">Add Post</button>
        </form>
      </div>
    
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
    
    </div>
  )
}

export default PostData

```
#### POST Request in React With Fetch API => with async-await :
```js
  // Post with fetchAPI
   const addPosts = async (title, body) => {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.random().toString(36).slice(2),
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      });
      let data = await response.json();
      setPosts((posts) => [data, ...posts]);
      setTitle('');
      setBody('');
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      addPosts(title, body);
   };

```


- another
```js

import React, { useState } from 'react'

function PostData() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")


  function saveUser() {
    // console.log({name,email,phoneNumber})
    let data = { name, email, phoneNumber }
    // In fetch method,body,headers are present
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message);
      });

  }



  return (
    <div>
      <h1>Post API Example</h1>
      <input type='text' value={name} placeholder='name' onChange={(e) => setName(e.target.value)} /><br></br>
      <input type='text' value={email} placeholder='email' onChange={(e) => { setEmail(e.target.value) }} /><br></br>
      <input type='text' value={phoneNumber} placeholder='phoneNumber' onChange={(e) => setPhoneNumber(e.target.value)} /><br></br>
      <button onClick={saveUser}>save new user</button>
    </div>
  )
}

export default PostData

```


## How to Perform a DELETE Request in React With Fetch API :

```js
const deletePost = async (id) => {
await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
   method: 'DELETE',
}).then((response) => {
   if (response.status === 200) {
      setPosts(
         posts.filter((post) => {
            return post.id !== id;
         })
      );
   } else {
      return;
   }
});
};

```

- Imp
```js
import React, { useState, useEffect } from 'react'

function DeleteData() {
  const [posts, setPosts] = useState([]);

  // GET with fetch API
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`)
      .then((response) => response.json())          // change string data to json format
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


// Delete with fetch API
  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.status === 200) {
        setPosts(
          posts.filter((post) => {
            return post.id !== id;
          })
        );
      } else {
        return;
      }
    });
  };

  return (
    <>
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
              
              <div className="button">
                <div className="delete-btn" onClick={() => deletePost(post.id)}>
                  Delete
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default DeleteData

```
#### Delete Request in React With Fetch API => with async-await :
```js
   // Delete with fetchAPI
   const deletePost = async (id) => {
      let response = await fetch(
         `https://jsonplaceholder.typicode.com/posts/${id}`,
         {
            method: 'DELETE',
         }
      );
      if (response.status === 200) {
         setPosts(
            posts.filter((post) => {
               return post.id !== id;
            })
         );
      } else {
         return;
      }
   };

```

# How to Consume APIs Using Axios 
- advance version of fetch API 
### How to Install and Configure an Axios Instance 
- You can add Axios to your project by running the following command:
```js
npm install axios

```

#### Once you've successfully installed Axios, we can proceed to create an instance, which is optional but recommended as it saves us from unnecessary repetition.
#### To create an instance, we use the .create() method, which we can use to specify information such as the URL and possibly headers:
```js
import axios from "axios";

const client = axios.create({
   baseURL: "https://jsonplaceholder.typicode.com/posts" 
});

```

## How to Perform a GET Request in React With Axios :
```js

import axios from "axios";

const client = axios.create({
   baseURL: "https://jsonplaceholder.typicode.com/posts" 
});


useEffect(() => {
   client.get('?_limit=10').then((response) => {
      setPosts(response.data);
   });
}, []);

```

```js
import React, { useState, useEffect } from 'react'
import axios from "axios";

function GetUserData() {
    const [posts, setPosts] = useState([])

    
    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts"
    });


    useEffect(() => {
        client.get('?_limit=3').then((response) => {
            setPosts(response.data);
        });
    }, []);

    return (
        <>
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
        </>
    )
}

export default GetUserData

```
#### GET Request in React With Axios => with async-await
```js
// GET with Axios
   useEffect(() => {
      const fetchPost = async () => {
         let response = await client.get('?_limit=10');
         setPosts(response.data);
      };
      fetchPost();
   }, []);

```

## How to Perform a POST Request in React With Axios :
```js
const addPosts = (title, body) => {
   client
      .post('', {
         title: title,
         body: body,
      })
      .then((response) => {
         setPosts((posts) => [response.data, ...posts]);
      });
};

```

```js
import React, { useState, useEffect } from 'react'
import axios from "axios";


function PostUserData() {
    const [posts, setPosts] = useState([])
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');



    // GET 
    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts"
    });


    useEffect(() => {
        client.get('?_limit=3').then((response) => {
            setPosts(response.data);
        });
    }, []);



    // POST
    const addPosts = (title, body) => {
        client
            .post('', {
                title: title,
                body: body,
            })
            .then((response) => {
                setPosts((posts) => [response.data, ...posts]);
                setTitle('');
                setBody('');
            });
    };


    const handleSubmit = (e) => {
        e.preventDefault(); // default behaviour change karta hai
        addPosts(title, body); // upar wale fun ko call kiya
    };


    return (
        <>
            <div className="app">

                <div className="add-post-container">
                    <form onSubmit={handleSubmit}>
                        {/*  user-Title  */}
                        <input type="text" className="form-control" value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        {/* user-body */}
                        <textarea name="" className="form-control" id="" cols="10" rows="8"
                            value={body} onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                        <button type="submit">Add Post</button>
                    </form>
                </div>

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

            </div>
        </>
    )
}

export default PostUserData

```
#### POST Request in React With Axios => with async-await
```js
   // Post with Axios
   const addPosts = async (title, body) => {
      let response = await client.post('', {
         title: title,
         body: body,
      });
      setPosts((posts) => [response.data, ...posts]);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      addPosts(title, body);
   };

```


## How to Perform a DELETE Request in React With Axios :
- We can perform delete requests using the delete method, which gets the id 
  and deletes it from the API. We'll also use the filter method to remove it from 
  the UI, as we did with the Fetch API method:

```js
const deletePost = (id) => {
   client.delete(`${id}`);
   setPosts(
      posts.filter((post) => {
         return post.id !== id;
      })
   );
};

```
- imp
```js
import React, { useState, useEffect } from 'react'
import axios from "axios";


function DeleteUserData() {
    const [posts, setPosts] = useState([])


    // GET with axios API
    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts"
    });


    useEffect(() => {
        client.get('?_limit=3').then((response) => {
            setPosts(response.data);
        });
    }, []);



    // DELETE with axios API
    const deletePost = (id) => {
        client.delete(`${id}`);
        setPosts(
            posts.filter((post) => {
                return post.id !== id;
            })
        );
    };




    return (
        <>
            <div className="posts-container">
                {posts.map((post) => {
                    return (
                        <div className="post-card" key={post.id}>
                            <h2 className="post-title">{post.title}</h2>
                            <p className="post-body">{post.body}</p>
                            <div className="button">
                                <button className="delete-btn" onClick={() => deletePost(post.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default DeleteUserData

```
#### POST Request in React With Axios => with async-await
```js
  // Delete with Axios
   const deletePost = async (id) => {
      await client.delete(`${id}`);
      setPosts(
         posts.filter((post) => {
            return post.id !== id;
         })
      );
   };

```
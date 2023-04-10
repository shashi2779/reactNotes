import React, { useState, useEffect } from 'react';

function PostData() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

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
          <button type="submit" >Add Post</button>
        </form>
      </div>
      {/*  */}
    </div>
  )
}

export default PostData
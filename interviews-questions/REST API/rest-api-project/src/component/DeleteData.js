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




//===============================================================================
//===============================================================================
//===============================================================================




// import React, { useEffect, useState } from 'react'

// function DeleteData() {
//   const [data, setData] = useState([])

//   useEffect(() => {

//     getUsers()

//   }, [])

//   function getUsers() {
//     fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`)
//       .then((response) => response.json())
//       .then((data1) => {
//         console.log(data1)
//         setData(data1)
//       })
//       .catch((err) => {
//         console.log(err.message);
//       })
//   }


//   function deleteUser(id) {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//       method: 'DELETE'
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)
//         getUsers()     // whenever delete API is done we can "call it again"
//       })
//   }


//   return (
//     <>
//       <h1>Delete API Call</h1>
//       <div className="posts-container">
//         {data.map((post) => (

//           <div className="post-card" key={post.id}>
//             <h2 className="post-title">{post.title}</h2>
//             <p className="post-body">{post.body}</p>
//             <button onClick={() => deleteUser(post.id)}>delete</button>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default DeleteData
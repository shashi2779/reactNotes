// import React, { useState, useEffect } from 'react';

// function PostData() {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [posts, setPosts] = useState([]);

//   const addPosts = async (title, body) => {
//     await fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       body: JSON.stringify({
//         title: title,
//         body: body,
//         userId: Math.random().toString(36).slice(2),
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',  // content type json format me rhega
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)
//         setPosts((posts) => [data, ...posts]);
//         setTitle('');
//         setBody('');
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault(); // default behaviour change karta hai
//     addPosts(title, body); // upar wale fun ko call kiya
//   };


//   return (
//     <div className="app">
//       <div className="add-post-container">
//         <form onSubmit={handleSubmit}>
//           {/*  user-Title  */}
//           <input type="text" className="form-control" value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           {/* user-body */}
//           <textarea name="" className="form-control" id="" cols="10" rows="8"
//             value={body} onChange={(e) => setBody(e.target.value)}
//           ></textarea>
//           <button type="submit" >Add Post</button>
//         </form>
//       </div>
//       {/*  */}
//     </div>
//   )
// }

// export default PostData


// ======================================================================================
// ======================================================================================
// ======================================================================================



import React, { useState } from 'react'

function PostData() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")


  function saveUser() {
    // console.log({name,email,phoneNumber})
    let data = { name, email, phoneNumber }
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
import React, { useState, useEffect } from 'react';

function GetData() {
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

export default GetData
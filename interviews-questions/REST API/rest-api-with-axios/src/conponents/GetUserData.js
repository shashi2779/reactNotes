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
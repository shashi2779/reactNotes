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
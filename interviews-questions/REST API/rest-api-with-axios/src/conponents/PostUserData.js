import React, { useState, useEffect } from 'react'
import axios from "axios";


function PostUserData() {
    const [posts, setPosts] = useState([])
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');



    // GET with axios API
    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts"
    });


    useEffect(() => {
        client.get('?_limit=3').then((response) => {
            setPosts(response.data);
        });
    }, []);



    // POST with axios API
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
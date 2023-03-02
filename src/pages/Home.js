import React from 'react'
import Nav from '../Components/Nav'
import { useState, useEffect } from 'react';

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch('https://api4286.s3.ap-south-1.amazonaws.com/products.json')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
  return (
    <>
    <Nav/>
    <div className="posts-container">
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.title}>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-body">{post.body}</p>
            </div>
         );
      })}
   </div>
    </>
  )
}

export default Home
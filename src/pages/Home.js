import React from 'react'
import Nav from '../Components/Nav'
import { useState, useEffect } from 'react';

function Home() {
  const [posts, setPosts] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

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
    <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-10 text-6xl font-semibold text-black">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 z-10">
            {posts.map((post) => {
                return (
                    <div className="post-card border-2 border-black rounded-xl pb-5" key={post.title}>

                    
                        <div className="aspect-w-1 aspect-h-1 h-80 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img src={post.filename} alt={post.title} className="h-80 w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                    <h3 className="mt-4 text-sm text-gray-700 pl-3">{post.title}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900 pl-3">DKK. {post.price}</p>
                    <button onAddToCart={handleAddToCart}>Add To Cart</button>
                    </div>
                );
            })}

        </div>
        </div>
    </div>
    </>
  )
}

export default Home
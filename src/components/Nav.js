import React from 'react'
import { useState } from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom'

function Nav() {
  const [cartCount, setCartCount] = useState(0);

  const [posts, setPosts] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };


  return (
    <>
      <nav className="bg-slate-400 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-white font-medium">
                Webshop
              </a>
            </div>
            <div className="flex items-center z-50">
              <div className="ml-4">
                <button onClick={handleCartOpen} className="flex items-center focus:outline-none">
                  <span className="text-white mr-2">{cartCount}</span>
                  <img className="h-6 w-6 text-white" src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" />
                </button>
                {isCartOpen && (
                  <div className="w-full h-full">
                    <button onClick={handleCartOpen} className="flex pl-52 items-center focus:outline-none absolute top-10">
                  <span className="text-white mr-2">{cartCount}</span>
                  <img className="h-6 w-6 text-white" src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" />
                </button>
                    <div className="bg-white w-64 p-4 rounded shadow-lg mt-48 float-right">
                      <div className="bg-white rounded-lg shadow-lg p-4">
                        <h2 className="font-bold text-lg mb-4">Cart</h2>
                        {posts.map((post) => (
                          <div key={post} className="flex justify-between items-center mb-2">
                            <div>
                              <h3 className="font-medium">{post.title}</h3>
                              <p className="text-gray-500">DKK{post.price} x {post.quantity}</p>
                            </div>
                            <button
                              className="text-red-500 font-bold"
                              onClick={() => removeFromCart(post)}
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <div className="flex justify-between items-center mt-4">
                          <h3 className="font-medium">Total:</h3>
                          <p className="font-bold">DKK {calculateTotal()}</p>
                        </div>
                      </div>
                      <button onClick={handleCartClose}>
                        <img className="h-6 w-6 text-white" src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" />
                      </button>
                    </div>
                    <div className="w-full h-full top-0 left-0"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Link to="/product" className='underline text-gray-800 italic font-normal'>Product Page</Link>
      <Outlet />
    </>
  )
}

export default Nav


import React from 'react'
import { useState } from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom'
import Cart from './Cart';

function Nav() {
  const [cartCount, setCartCount] = useState(0);
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
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
          <div className="flex items-center">
            <div className="ml-4">
              <button onClick={handleCartOpen} className="flex items-center focus:outline-none">
                <span className="text-white mr-2">{cartCount}</span>
                <img className="h-6 w-6 text-white" src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" />
              </button>
              {isCartOpen && (
            <div className="fixed top-0 left-0 w-full h-full z-50">
            <div className="bg-white w-64 p-4 rounded shadow-lg absolute top-20 right-0 z-50">
          <Cart />
          <button onClick={handleCartClose}>
          <img className="h-6 w-6 text-white" src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" />
          </button>
          </div>
          <div className="bg-black opacity-25 w-full h-full absolute top-0 left-0 z-40"></div>
        </div>
      )}
            </div>
          </div>
        </div>
      </div>
    </nav>
    <Link to="/product" className='underline text-gray-800 italic font-normal'>Product Page</Link>
    <Outlet/>
    </>
  )
}

export default Nav


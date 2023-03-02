import React, { useState } from 'react';

const Cart = () => {
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
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="font-bold text-lg mb-4">Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-gray-500">${item.price} x {item.quantity}</p>
          </div>
          <button
            className="text-red-500 font-bold"
            onClick={() => removeFromCart(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="flex justify-between items-center mt-4">
        <h3 className="font-medium">Total:</h3>
        <p className="font-bold">${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default Cart;
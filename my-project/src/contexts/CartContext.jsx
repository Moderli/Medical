import { createContext, useContext, useState } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add medicine to the cart
  const addToCart = (medicine) => {
    setCart((prevCart) => [...prevCart, medicine]);
  };

  // Remove medicine from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

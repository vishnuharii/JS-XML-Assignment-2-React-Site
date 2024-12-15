import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        setTotalPrice(totalPrice + product.price);
    };

    return (
        <CartContext.Provider value={{ cartItems, totalPrice, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

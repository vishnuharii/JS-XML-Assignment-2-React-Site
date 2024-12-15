import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, totalPrice } = useContext(CartContext);

    return (
        <div>
            <h1>Your Cart</h1>
            {cartItems.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                </div>
            ))}
            <h2>Total: ${totalPrice}</h2>
        </div>
    );
};

export default Cart;
